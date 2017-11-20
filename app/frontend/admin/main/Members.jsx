import React from 'react';
import $ from 'jquery';
import { Table, Button } from 'antd';

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
  render: (text, record) => (
    <a href="#">Delete</a>
  )
}];

class Members extends React.Component {
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

  getData = () => {
    $.ajax({
      url: '/admin/members',
      type: 'GET',
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

    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            禁用账户
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ total }} rowKey={'id'} />
      </div>
    );
  }
}

export default Members;
