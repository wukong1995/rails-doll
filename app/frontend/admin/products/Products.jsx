import React from 'react';
import $ from 'jquery';
import { Table, Button, Switch, Modal } from 'antd';
import ProductForm from './ProductForm';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '商品名称',
      key: 'name',
      dataIndex: 'name',
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
      render: (is_add) => (
        <Switch checkedChildren="上架" unCheckedChildren="下架" defaultChecked={is_add} />
      )
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
    product: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  fetchData = (page = 1) => {
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

  deleteOne(id) {
    Modal.confirm({
      title: 'Confirm',
      content: '确认删除',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        $.ajax({
          url: `/admin/products/${id}`,
          headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
          },
          type: 'DELETE',
          success: (res) => {
            if (res === undefined) {
              this.fetchData();
            }
          },
          error: (err) => {
            alert('请刷新重试');
            console.log(err);
          }
        });
      }
    });
  }

  edit(id) {
    $.ajax({
      url: `/admin/products/${id}`,
      type: 'GET',
      dataType: 'json',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      success: (product) => {
        this.setState({
          product,
          isOpenModal: true
        });
      },
      error: (res) => {
        Modal.error({
          title: '错误',
          content: res.responseText
        });
      }
    });
  }

  deleteSelect = () => {
    this.setState({ loading: true });

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
      isOpenModal: true,
      product: {}
    });
  }

  closeModal = () => {
    this.setState({
      isOpenModal: false
    });
  }

  render() {
    const { loading, selectedRowKeys, data, total, isOpenModal, product } = this.state;
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
            删除商品
          </Button>
          <Button
            type="primary"
            onClick={this.create}
          >
            添加商品
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={{ total, onChange: (page) => { this.fetchData(page); } }} rowKey={'id'} />

        <ProductForm isVisible={isOpenModal} closeModal={this.closeModal} product={product} fetchData={this.fetchData} />
      </div>
    );
  }
}

export default Products;
