import React from 'react';
import { Table, Button, Modal } from 'antd';
import { deleteAction, getAction, fetchAction, deleteMultipleAction } from 'utils/ajax_action';
import RecommendForm from './RecommendForm';

class recommend extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '名称',
      key: 'title',
      dataIndex: 'title',
    }, {
      title: '分类',
      key: 'category',
      dataIndex: 'category',
    }, {
      title: '创建时间',
      key: 'created_at',
      dataIndex: 'created_at',
    }, {
      title: '操作',
      key: 'action',
      dataIndex: 'id',
      render: (id) => (
        <span>
          <Button type="primary" onClick={() => { this.edit(id); }}>编辑</Button>&nbsp;&nbsp;
          <Button type="danger" onClick={() => { this.deleteOne(id); }}>删除</Button>
        </span>
      )
    }];
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    isOpenModal: false,
    data: [],
    total: 0,
    recommend: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  fetchData = (page = 1) => {
    fetchAction('/admin/recommends', page)
      .done((res) => {
        this.setState({
          data: res.recommends,
          total: res.total
        });
      })
      .fail((err) => {
        alert('请刷新重试');
        console.log(err);
      });
  }

  deleteOne(id) {
    Modal.confirm({
      title: 'Confirm',
      content: '确认删除',
      okType: 'danger',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        deleteAction(`/admin/recommends/${id}`)
          .done((res) => {
            if (res === undefined) {
              this.fetchData();
            }
          })
          .fail((err) => {
            alert('请刷新重试');
            console.log(err);
          });
      }
    });
  }

  edit(id) {
    getAction(`/admin/recommends/${id}`)
      .done((recommend) => {
        this.setState({
          recommend,
          isOpenModal: true
        });
      })
      .fail((res) => {
        Modal.error({
          title: '错误',
          content: res.responseText
        });
      });
  }

  deleteSelect = () => {
    this.setState({ loading: true });

    Modal.confirm({
      title: 'Confirm',
      content: '确认删除',
      okType: 'danger',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        deleteMultipleAction('/admin/delete/multiple', this.state.selectedRowKeys)
          .done((res) => {
            if (res === undefined) {
              this.fetchData();
              this.setState({
                selectedRowKeys: [],
                loading: false
              });
            }
          })
          .fail((err) => {
            alert('请刷新重试');
            this.setState({
              loading: false
            });
            console.log(err);
          });
      }
    });
  }

  create = () => {
    this.setState({
      isOpenModal: true,
      recommend: {}
    });
  }

  closeModal = () => {
    this.setState({
      isOpenModal: false
    });
  }

  render() {
    const { loading, selectedRowKeys, data, total, isOpenModal, recommend } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="danger"
            onClick={this.deleteSelect}
            disabled={selectedRowKeys.length <= 0}
            loading={loading}
          >
            删除
          </Button>&nbsp;&nbsp;
          <Button
            type="primary"
            onClick={this.create}
          >
            添加
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={{ total, onChange: (page) => { this.fetchData(page); } }} rowKey={'id'} />

        <RecommendForm isVisible={isOpenModal} closeModal={this.closeModal} recommend={recommend} fetchData={this.fetchData} />
      </div>
    );
  }
}

export default recommend;
