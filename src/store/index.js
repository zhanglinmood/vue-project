// 模块化

// 安装vuex

import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)


import home from './home'
import user from './user'

// 存储数据的地方
const state = {}

// 直接改变数据的地方
const mutations = {}

// 和Vue组件用户交互   通知Mutation修改数据
const actions = {}

// 简化数据的操作
const getters = {}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        user
    }
})

export default store