import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/home'
import Cart from '@/views/Cart/cart'
import Category from '@/views/Category/category'
import Mine from '@/views/Mine/mine'
import Serarch from '@/views/Search/search'
import Index from "../views/Home/childrien/Index.vue"
import Gosear from "../views/Gosearch/Gosear.vue"
import Login from "../views/login/login.vue"
import Shop from "../views/shopsel/shop.vue"
import MyShop from "../views/shopsel/myshop.vue"
//配置首页的子组件

import Ele from "../views/Home/childrien/Ele.vue"
Vue.use(VueRouter) //配置路由的页面
const routes = [{ //这里面是配置几个路由页面
    path: '/home',
    name: 'Home',
    component: Home, //默认显示第一个页面
    redirect: "/home/index",
    children: [{
        path: "index",
        component: Index
    }, {
        path: "ele",
        component: Ele
    }]
}, {
    path: "/cart",
    name: "Cart",
    component: Cart
}, {
    path: "/category",
    name: "Category",
    component: Category,
}, {
    path: "/mine",
    name: "Mine",
    component: Mine
}, {
    path: "/search",
    name: "Search",
    component: Serarch
}, {
    path: "/gosear",
    name: "gosear",
    component: Gosear
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/shoplist",
    name: "shoplist",
    component: Shop
}, {
    path: "/myshop",
    name: "myshop",
    component: MyShop
}]

const router = new VueRouter({
    routes
})

export default router