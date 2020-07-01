import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { Redirect } from "react-router-dom";

import "./login.less";
import logo from "./images/logo.svg";
import { reqLogin } from "../../api";
import Head from "../../components/headerfooter/header.jsx";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
//分别暴露需要{}
/**›
登录的路由组件
 */
class Login extends Component {
  handleSubmit = event => {
    //阻止事件的默认行为
    event.preventDefault();
    this.props.form.validateFields(async (err, values) => {
        const { userAccount, userPassword } = values;
      //校验成功 values是获得的对象user_account和user_password
      if (!err) {
        reqLogin(userAccount, userPassword)
          .then(response => {
            //保存user
            const user = response.data;
            memoryUtils.user = user; //保存到内存
            storageUtils.saveUser(user); //保存到local本地
            console.log("success", response.data);
             message.success("登录成功");
             this.props.history.push("../user")
          })
          .catch(error => {
            console.log("failed", error);
            message.error(error.msg);
          });
      } else {
        console.log("请求失败");
      }
    });
  };
  //register界面跳转 通过click事件
  handleGoRegister = event => {
    this.props.history.push("/register");
  };

  render() {
    //如果已经登录 跳转到user界面
    const user = memoryUtils.user;
    if (user && user._id) {
      return <Redirect to="/user" />;
    }

    //得到具有强大功能的form对象
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <Head />
        <section className="login-content">
          <h2>欢迎登录</h2>
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("userAccount", {
                  //配置对象：属性名是特定的一些名称
                  //声明式验证：直接使用别人定义好的验证规则进行验证
                  rules: [
                    { required: true, message: "用户名必须输入" },
                    { min: 4, message: "用户名至少四位" },
                    { max: 12, message: "用户名至多14位" },
                    {
                      pattern: /^[a-zA-Z0-9_]+$/,
                      message: "用户名必须是英文、数字、下划线组成"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("userPassword", {
                  rules: [{ required: true, message: "密码必须输入" }]
                })(
                  <Input.Password
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="userPassword"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Checkbox>记住密码</Checkbox>
                <br />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
                <br />
                {/* <a href="？">注册</a> */}
                <a onClick={this.handleGoRegister} type="primary">
                  去注册
                </a>
                <a className="login-form-forgot" href="？？">
                  忘记密码？
                </a>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

/**
1.高阶函数
更新动态，更加具有扩展性
create是高阶函数 返回一个函数
getFieldDecorator()()
1)接收函数类型的参数或者函数的返回值是一个函数
2)常见的高阶函数：
    a)setTimeout()/setInterval()
    b)Promise:Promise(()=>{}) then(value=>{},reason => {})
    c)数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
    d)函数对象的bind()方法 返回值是一个函数
3）
2.高阶组件（实质上也是高阶函数）
1）本质是一个函数Form.create()
2）接收一个组件（被包装组件Login--子组件），返回一个新的组件（包装组件wrapLogin--父组件），包装组件向被包装组件传入特定的属性
3）作用：扩展组件的功能（父组件给子组件增加了form对象）
 */
/**
 包装Form组件生成一个新的组件 ： Form(Login)
 新组件会向Form组件传递一个对象属性：form
 */
/**组件是类型（函数） 标签是组件的实例 */
const wrapLogin = Form.create()(Login);
export default wrapLogin;
/*
1.前台表单验证
2.收集表单输入数据
*/

/**
async和await
1.作用
简化pormise对象的使用：不再使用then来指定成功失败的回调函数
以同步编码（没有回调函数了）方式实现异步流程
2.写哪里
await：在返回promise的表达式左侧写await：不想要promise，想要promise异步执行的成功的value数据
async：await所在函数（最近的 ）定义的左侧写async
 */
