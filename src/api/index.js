/**
能根据接口文档定义接口请求
包含以应用中所有接口请求函数的模块
每个函数的返回值都是promise
 */
import axios from "axios";

 import ajax from './ajax'

import { BASE_URL } from "../config/config.js";

 export const reqLogin = (userAccount,userPassword) =>ajax(BASE_URL +'login',{userAccount,userPassword},'POST')
 
 /**注册
 使用封装的ajax接口请求模块
  */
 export const reqRegister = 
 (userAccount,userPassword,userTel,userName,userNickname,userAcademy,
 userClass,userStudentNumber,userEmail,gender,classId,userImage) => ajax( BASE_URL + 'adduser',
 {userAccount,userPassword,userTel,userName,userNickname,userAcademy,userClass,userStudentNumber,userEmail,gender,classId,userImage},
 'POST')
//  export const reqRegister = 
//  () => ajax( '/user/get',
//  {},
//  'GET')

 //添加用户
  export const reqAddUser = (user) =>ajax('/manage/user/add',user,'POST')
