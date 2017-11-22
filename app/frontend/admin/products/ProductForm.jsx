import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox, InputNumber, Modal } from 'antd';
import $ from 'jquery';

const FormItem = Form.Item;
const { TextArea } = Input;

class ProductForm extends React.Component {
  state = {
    confirmLoading: false,
    confirmDirty: false
  };

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, product) => {
      if (!err) {
        $.ajax({
          url: '/admin/products',
          type: 'POST',
          dataType: 'json',
          headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
          },
          data: {
            product
          },
          success: (res) => {
            console.log(res);
          },
          error: (res) => {
            Modal.error({
              title: '错误',
              content: res.responseText
            });
          }
        });
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }


  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const { getFieldDecorator } = this.props.form;
    const { closeModal, isVisible } = this.props;

    return (
      <Modal
        title="添加商品"
        okText="确定"
        cancelText="取消"
        visible={isVisible}
        onOk={this.handleSubmit}
        onCancel={closeModal}
        confirmLoading={this.state.confirmLoading}
      >
        <Form onSubmit={this.handleSubmit}>
          <input name="utf8" type="hidden" value="✓" />
          <input name="products[id]" ref={(id) => { this.id = id; }} type="hidden" value="" />
          <FormItem
            {...formItemLayout}
            label="商品名称"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入商品名称',
              }],
            })(
              <Input />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品描述"
            hasFeedback
          >
            {getFieldDecorator('description', {})(
              <TextArea rows={4} />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品价格"
            hasFeedback
          >
            {getFieldDecorator('price', {
              rules: [{
                type: 'number', message: '价格必须大于1',
              }, {
                required: true, message: '请输入商品价格',
              }],
            })(
              <InputNumber min={1} step={1.0} />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品折扣"
            hasFeedback
          >
            {getFieldDecorator('discount', {
              rules: [{
                type: 'number', message: '折扣在0-1之间',
              }],
            })(
              <InputNumber min={0.1} max={1} step={0.1} />
              )}
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('is_add', {
              valuePropName: 'checked',
            })(
              <Checkbox>是否上架</Checkbox>
              )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

ProductForm.propTypes = {
  form: PropTypes.object.isRequired,
  closeModal: PropTypes.func,
  isVisible: PropTypes.bool
};

ProductForm.defaultProps = {
  closeModal: () => {},
  isVisible: false
};

export default Form.create()(ProductForm);
