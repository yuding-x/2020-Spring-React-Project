/**
应用的根组件 
*/

import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'

import Login from './pages/login/login'
import User from './pages/user/user'
import Register from './pages/register/register'
import Feedback from './pages/feedback/feedback.jsx'
import PersonalCenter from './pages/personalCenter/personalCenter.jsx'

export default class App extends Component {

    render() {
        return (
            /**路由跳转 */
            <HashRouter>
                <Switch>
                {/* 登录界面 */}
                    <Route path="/" component={Login} exact />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register}/>             
                    <Route path='/user' component={User}/>
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/personalCenter" component={PersonalCenter} />
                </Switch>
            </HashRouter>
        )
    } 
}

