/**
能发送异步ajax请求的模块
封装axios库
函数返回值是promise对象
 */
/**
 优化：统一处理请求异常
 在外层包一个自己创建的promise对象
 在请求出错时，不reject(error),而是显示错误提示（antd的message）
 优化：异步得到的是response.data
 在请求成功resolve时：resolve(response.data)
  */
import axios from "axios";
import { message } from "antd";

export default function ajax(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    //1.执行异步ajax请求
    if (method === "GET") {
      //发送get请求
      promise = axios.get(url, {
        //配置对象
        params: data //指定请求参数
      });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        //reject(error)
        message.error("请求出错了:" + error.message);
      });
    //2.如果成功，调用resolve（value）;
    //3.如果失败，不调用reject(reason)，而是提示异常信息
  });
  // 执行异步ajax 请求
}
