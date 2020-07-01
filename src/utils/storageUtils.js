/**
进行local数据存储管理的工具模块 
*/
/*原生localStorage
const USER_KEY = 'user_key'

export default{
    //保存user
    saveUser(){
        localStorage.setItem(USER_KEY,JSON.stringify(user))
    }
    //读取user
    getUser(){
        //如果有 返回，没有返回空对象
        return JSON.parse(localStorage.getItem(USER_KEY)||'{}') 
    }
    //删除user
    removeUser{
        localStorage.removeItem(USER_KEY)
    }
};
*/
import store from 'store'

const USER_KEY = 'user_key'

export default{
    //保存user
    saveUser(user){
        store.set(USER_KEY,user)
    },
    //读取user
    getUser(){
        //如果有 返回，没有返回空对象
        return store.get(USER_KEY) || {}
    },
    //删除user
    removeUser(){
        store.remove(USER_KEY)
    }
};