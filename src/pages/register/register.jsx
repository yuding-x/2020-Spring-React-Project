import React, { Component } from "react";
import { Form } from "antd";

import Head from "../../components/headerfooter/header.jsx";
import "./register.less";
import RegisterForm from "./registerForm.jsx";

class Register extends Component {
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("pwd")) {
      callback("两次密码不一致");
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  handleGoLogin = event => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="register">
        <Head />
        
        <div className="register-form-bg">
        <a onClick={this.handleGoLogin} type="primary">
            返回登录
          </a>
          <RegisterForm />
          
        </div>
      </div>
    );
  }
}

const wrapRegister = Form.create()(Register);
export default wrapRegister;
