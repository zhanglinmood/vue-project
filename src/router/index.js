import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"




const router = new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            name:"search",
            path:"/search/:keyword?",
            component:Search
        },
        {
            path:"/login",
            component:Login,
            meta:{
                isHide:true,
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                isHide:true,
            }
        },
        {
            path:"/",
            redirect:"/home"
        }
    ]
})

export default router