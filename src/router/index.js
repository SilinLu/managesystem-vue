import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'
import AddGoods from "@/views/AddGoods";
import ListGoods from "@/views/ListGoods";
Vue.use(Router);


export default new Router({
    routes: [
        {
            path:'/',
            redirect:'login'
        },
        {
            // 登录页
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            // 登录页
            path: '/addgoods',
            name: 'AddGoods',
            component: AddGoods
        },
        {
            // 登录页
            path: '/listgoods',
            name: 'ListGoods',
            component: ListGoods
        },
        {
            // 首页
            path: '/main',
            name: 'Main',
            component: Main
        }
    ]
});

