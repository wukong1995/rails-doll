import React from 'react';
import $ from 'jquery';
import { Table, Button, Switch } from 'antd';
import ProductForm from './ProductForm';

const columns = [{
  title: '商品名称',
  key: 'name',
  dataIndex: 'name',
}, {
  title: '商品描述',
  key: 'description',
  dataIndex: 'description',
}, {
  title: '价格',
  key: 'price',
  dataIndex: 'price',
}, {
  title: '折扣',
  key: 'discount',
  dataIndex: 'discount',
}, {
  title: '是否上架',
  key: 'is_add',
  dataIndex: 'is_add',
  render: (text) => (
    <Switch checkedChildren="上架" unCheckedChildren="下架" defaultChecked={text} />
  )
}, {
  title: '创建时间',
  key: 'created_at',
  dataIndex: 'created_at',
}];

class Products extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    isOpenModal: false,
    data: [],
    total: 0
  };

  componentDidMount() {
    this.getData();
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  getData = (page = 1) => {
    $.ajax({
      url: '/admin/products',
      type: 'GET',
      data: {
        page
      },
      success: (res) => {
        this.setState({
          data: res.products,
          total: res.total
        });
      },
      error: (err) => {
        alert('请刷新重试');
        console.log(err);
      }
    });
  }

  delete = () => {
    this.setState({ loading: true });
    console.log(this.state.selectedRowKeys)
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  create = () => {
    this.setState({
      isOpenModal: true
    });
  }

  closeModal = () => {
    this.setState({
      isOpenModal: false
    });
  }

  render() {
    const { loading, selectedRowKeys, data, total, isOpenModal } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="danger"
            onClick={this.delete}
            disabled={selectedRowKeys.length <= 0}
            loading={loading}
          >
            删除商品
          </Button>
          <Button
            type="primary"
            onClick={this.create}
          >
            添加商品
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ total, onChange: (page) => { this.getData(page); } }} rowKey={'id'} />

        <ProductForm isVisible={isOpenModal} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default Products;
