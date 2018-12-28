import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Radio, Modal } from 'antd';
import $ from 'jquery';

const FormItem = Form.Item;
const { TextArea } = Input;

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

class RecommendForm extends React.Component {
  state = {
    confirmLoading: false,
    confirmDirty: false,
  };

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, recommend) => {
      if (!err) {
        const { id } = this.props.recommend;
        const isNew = id === undefined;
        $.ajax({
          url: isNew ? '/admin/recommends' : `/admin/recommends/${id}`,
          type: isNew ? 'POST' : 'PATCH',
          dataType: 'json',
          headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
          },
          data: {
            recommend
          },
          success: (res) => {
            if (res === undefined) {
              this.props.closeModal();
              this.props.fetchData();
            }
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { closeModal, isVisible, recommend } = this.props;
    const { title, desc, category } = recommend;
    return (
      <Modal
        title="添加"
        okText="确定"
        cancelText="取消"
        visible={isVisible}
        onOk={this.handleSubmit}
        onCancel={closeModal}
        confirmLoading={this.state.confirmLoading}
      >
        <Form onSubmit={this.handleSubmit}>
          <input name="utf8" type="hidden" value="✓" />
          <FormItem
            {...formItemLayout}
            label="名称"
            hasFeedback
          >
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: '请输入名称',
              }],
              initialValue: title
            })(
              <Input />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="描述"
            hasFeedback
          >
            {getFieldDecorator('desc', {
              initialValue: desc
            })(
              <TextArea rows={4} />
              )}
          </FormItem>
          <Form.Item
            {...formItemLayout}
            label="分类"
          >
            {getFieldDecorator('category', {
              initialValue: category
            })(
              <Radio.Group>
                <Radio value="default">default</Radio>
                <Radio value="game">game</Radio>
                <Radio value="book">book</Radio>
                <Radio value="makeup">makeup</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

RecommendForm.propTypes = {
  form: PropTypes.object.isRequired,
  closeModal: PropTypes.func,
  fetchData: PropTypes.func,
  isVisible: PropTypes.bool,
  recommend: PropTypes.object
};

RecommendForm.defaultProps = {
  closeModal: () => { },
  fetchData: () => { },
  isVisible: false,
  recommend: {}
};

export default Form.create()(RecommendForm);
