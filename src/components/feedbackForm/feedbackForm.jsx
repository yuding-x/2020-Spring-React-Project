import React, { Component } from "react";
import { Form, Input, Button, Menu } from "antd";
// import { FormOutlined } from "@ant-design/icons";

import "./feedbackForm.less";

export default class FeedbackForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      
    };
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };

    const validateMessages = {
      required: "This field is required!",
      types: {
        email: "Not a validate email!",
        number: "Not a validate number!"
      },
      number: {
        range: "Must be between ${min} and ${max}"
      }
    };

    return (
      <div>
        <div className="feedbackFormArea">
          <Menu mode="horizontal" defaultSelectedKeys={["feedback"]}>
            <Menu.Item key="feedback" id="feedbackFormTitle">
              {/* <FormOutlined /> */}
              您的反馈
            </Menu.Item>
          </Menu>
          <Form
            {...layout}
            name="nest-messages"
            // validateMessages={validateMessages}
            className="feedbackFormAreaIn"
          >
            <Form.Item name={["user", "title"]} label="标题">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "feedback"]} label="反馈">
              <Input.TextArea rows={8} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit" id="submitFormBtn">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
