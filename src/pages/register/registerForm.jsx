import React, { Component } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { Redirect } from "react-router-dom";
import { SmileOutlined } from '@ant-design/icons';
import { reqRegister } from "../../api";
import "./register.less";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
const classArray = [
  "计科（师范）181",
  "计金融182",
  "计科183",
  "计科184",
  "计科185",
  "软工181",
  "软工182",
  "物联网181",
  "国服191",
  "国服192",
  "国服193",
  "国服194",
  "国服195",
  "国服196",
  "国服197",
  "国服198"
];
const academyArray = [
  "杭州国际服务工程学院",
  "沈钧儒法学院",
  "医学院",
  "外国语学院",
  "理学院",
  "体育与健康学院",
  "经济与管理学院",
  "阿里巴巴商学院"
];

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFlag: false,
      confirmDirty: false,
      autoCompleteResult: [],
      static_head: "../../../images/head.png"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // 获取表单数据
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values, values.user_academy);
        //修改
        /**
        调用index.js中的reqRegister，
        本质是ajax
        传输数据，成功输出success，失败failed */
        reqRegister(
          values.userAccount,
          values.userPassword,
          values.user_tel,
          values.user_name,
          values.user_nickname,
          values.user_academy,
          values.user_class,
          values.user_studentnumber,
          values.user_email,
          values.user_gender,
          values.class_id,
          this.state.static_head
        )
          .then(response => {
            console.log("success", response.state);
            if (response.state == "success") {
              message.success("注册成功");
            }
          })
          .catch(error => {
            console.log("failed", error);
          });
      }
      //如果没有错误，则发送用户信息给后端
      else {
        message.error("注册信息有误！");
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("userPassword")) {
      callback("两次密码不一致");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["user_password_repeat"], { force: true });
    }
    callback();
  };

  changeAcademy = value => {
    console.log(value);
  };
  handleFocus = a => {
    console.log(a);
    a.attr(
      "style='outline:none;border: 1px solid #CCCCCC;background:#f0ecec;'"
    );
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="register-form-content">
      <div className="icons-list">
         {/* <SmileOutlined /> */}
         <h2>注册</h2>
        </div>
        {/* 表单提交 */}
        <Form
          {...formItemLayout}
          name="register"
          onSubmit={this.handleSubmit}
          className="register-form"
        >
          {/* 账号  userAccount */}
          <Form.Item label="用户账号">
            {getFieldDecorator("userAccount", {
              rules: [
                {
                  required: true,
                  message: "请输入您的用户账号"
                },
                {
                  min: 5,
                  max: 10,
                  message: "用户账号为5-10位字符"
                },
                {
                  pattern: new RegExp("^\\w{5,10}$", "g"),
                  message: "用户账号必须为字母或者数字"
                }
              ]
            })(<Input type="text" placeholder="请输入用户名" />)}
          </Form.Item>

          {/* 密码  userPassword */}
          <Form.Item label="用户密码" hasFeedback>
            {getFieldDecorator("userPassword", {
              rules: [
                {
                  required: true,
                  message: "请输入您的密码"
                },
                {
                  min: 6,
                  max: 15,
                  message: "密码为6-15位字符"
                },
                {
                  pattern: new RegExp("^\\w{6,15}$", "g"),
                  message: "用户名必须为字母或者数字"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password placeholder={"请输入您的密码"} />)}
          </Form.Item>

          {/* 确认密码  user_password_repeat */}
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator("user_password_repeat", {
              rules: [
                {
                  required: true,
                  message: "请再次输入您的密码"
                },
                {
                  validator: this.compareToFirstPassword,
                  message: "两次密码不一致"
                }
              ]
            })(
              <Input.Password
                onBlur={this.handleConfirmBlur}
                placeholder={"请再次输入您的密码"}
              />
            )}
          </Form.Item>

          <Form.Item label="真实姓名" hasFeedback>
            {getFieldDecorator("user_name", {
              rules: [
                {
                  required: true,
                  message: "请输入您的真实姓名"
                },
                {
                  pattern: new RegExp("^[\u4e00-\u9fa5]+$", "g"),
                  message: "真实姓名有误"
                }
              ]
            })(<Input placeholder={"请输入您的真实姓名"} />)}
          </Form.Item>

          <Form.Item label="用户学号" hasFeedback>
            {getFieldDecorator("user_studentnumber", {
              rules: [
                {
                  required: true,
                  message: "请输入您的学号"
                },
                {
                  pattern: new RegExp("^\\d{5,20}$", "g"),
                  message: "学号有误"
                }
              ]
            })(<Input placeholder={"请输入您的学号"} />)}
          </Form.Item>

          <Form.Item label="班级序号" hasFeedback>
            {getFieldDecorator("class_id", {
              rules: [
                {
                  required: true,
                  message: "请输入您的序号"
                },
                {
                  type: "string",
                  message: "序号不正确"
                }
              ]
            })(<Input placeholder={"请输入您加入班级的序号"} />)}
          </Form.Item>

          <Form.Item label="昵称" hasFeedback>
            {getFieldDecorator("user_nickname", {
              rules: [
                {
                  required: true,
                  message: "请输入您的昵称"
                }
              ]
            })(<Input placeholder={"请输入您的昵称"} />)}
          </Form.Item>

          <Form.Item label="性别">
            {getFieldDecorator("user_gender", {
              rules: [
                {
                  required: true,
                  message: "请输入您的性别"
                }
              ]
            })(
              <Select placeholder="请选择性别" onChange={this.changeGender}>
                <Select.Option value="男">男</Select.Option>
                <Select.Option value="女">女</Select.Option>

                {/* <Select.Option value="1">杭州国际服务工程学院</Select.Option>
                <Select.Option value="2">沈钧儒法学院</Select.Option> */}
              </Select>
            )}
          </Form.Item>

          {/* 手机号码  user_tel */}
          <Form.Item label="手机号" hasFeedback>
            {getFieldDecorator("user_tel", {
              rules: [
                {
                  required: true,
                  message: "请输入您的手机号"
                },
                {
                  pattern: new RegExp("^1[3456789]\\d{9}$", "g"),
                  message: "请输入正确的手机号"
                }
              ]
            })(<Input placeholder={"请输入您的手机号"} />)}
          </Form.Item>

          <Form.Item label="邮箱" hasFeedback>
            {getFieldDecorator("user_email", {
              rules: [
                {
                  type: "email",
                  message: "邮箱格式不正确"
                },
                {
                  required: true,
                  message: "请输入您的邮箱"
                }
              ]
            })(<Input placeholder={"请输入您的邮箱"} />)}
          </Form.Item>

          <Form.Item label="学院">
            {getFieldDecorator("user_academy", {
              rules: [
                {
                  required: true,
                  message: "请输入您的学院"
                }
              ]
            })(
              <Select
                placeholder="请选择学院"
                // defaultValue="1"

                onChange={this.changeAcademy}
              >
                <Select.Option value="杭州国际服务工程学院">
                  杭州国际服务工程学院
                </Select.Option>
                <Select.Option value="沈钧儒法学院">沈钧儒法学院</Select.Option>
                <Select.Option value="医学院">医学院</Select.Option>
                <Select.Option value="外国语学院">外国语学院</Select.Option>
                <Select.Option value="体育与健康学院">
                  体育与健康学院
                </Select.Option>
                <Select.Option value="经济与管理学院">
                  经济与管理学院
                </Select.Option>
                <Select.Option value="理学院">理学院</Select.Option>
                <Select.Option value="阿里巴巴商学院">
                  阿里巴巴商学院
                </Select.Option>

                {/* <Select.Option value="1">杭州国际服务工程学院</Select.Option>
                <Select.Option value="2">沈钧儒法学院</Select.Option> */}
              </Select>
            )}
          </Form.Item>

          <Form.Item label="班级">
            {getFieldDecorator("user_class", {
              rules: [
                {
                  required: true,
                  message: "请输入您的班级"
                }
              ]
            })(
              <Select
                placeholder="请选择班级"
                // defaultValue="1"
                autofocus
                onChange={this.changeClass}
              >
                <Select.Option value="计科（师范）181">
                  计科（师范）181
                </Select.Option>
                <Select.Option value="计金融182">计金融182</Select.Option>
                <Select.Option value="计科183">计科183</Select.Option>
                <Select.Option value="计科184">计科184</Select.Option>
                <Select.Option value="计科185">计科185</Select.Option>
                <Select.Option value="软工181">软工181</Select.Option>
                <Select.Option value="软工182">软工182</Select.Option>
                <Select.Option value="物联网181">物联网181</Select.Option>
                <Select.Option value="国服191">国服191</Select.Option>
                <Select.Option value="国服192">国服192</Select.Option>
                <Select.Option value="国服193">国服193</Select.Option>
                <Select.Option value="国服194">国服194</Select.Option>
                <Select.Option value="国服195">国服195</Select.Option>
                <Select.Option value="国服196">国服196</Select.Option>
                <Select.Option value="国服197">国服197</Select.Option>
                <Select.Option value="国服198">国服198</Select.Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
export default Form.create()(RegisterForm);
