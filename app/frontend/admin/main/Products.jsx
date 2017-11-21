import React from 'react';

const columns = [{
  title: '邮箱',
  key: 'email',
  dataIndex: 'email',
}, {
  title: '用户名',
  key: 'name',
  dataIndex: 'name',
}, {
  title: '创建时间',
  key: 'created_at',
  dataIndex: 'created_at',
}, {
  title: '操作',
  key: 'action',
  render: () => (
    <Switch checkedChildren="正常" unCheckedChildren="冻结" defaultChecked />
  )
}];

class Products extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data: [],
    total: 0
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  componentDidMount() {
    this.getData();
  }

  getData = (page = 1) => {
    $.ajax({
      url: '/admin/members',
      type: 'GET',
      data: {
        page
      },
      success: (res) => {
        this.setState({
          data: res.members,
          total: res.total
        });
      },
      error: (err) => {
        alert('请刷新重试');
        console.log(err);
      }
    });
  }

  render() {
    const { loading, selectedRowKeys, data, total } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={selectedRowKeys.length <= 0}
            loading={loading}
          >
            禁用账户
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ total, onChange: (page, pageSize) => { this.getData(page); } }} rowKey={'id'} />
      </div>
    );
  }
}

export default Products;
