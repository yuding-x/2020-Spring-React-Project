import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'
// import Header from '../../components/headerfooter/header.jsx'
import AlreadyLoginHead from '../../components/headerfooter/already_login_header.jsx'

import MainCoursePage from '../mainCoursePage/mainCoursePage.jsx'
import './user.less'
/**
登录的路由组件
 */
export default class User extends Component {
    render() {
        const user = memoryUtils.user
        //如果内存中没有存储user ==> 当前没有登录
        // if(!user||!user._id){
        //     //自动跳转到登录（在render中）
        //     return <Redirect to='/login'/>
        // }
        return (
            <div className="user-bg">
                {/* Hello {user.userAccount} */}
                <AlreadyLoginHead current="course"/>
                <MainCoursePage />
            </div>
        )
    }
}
