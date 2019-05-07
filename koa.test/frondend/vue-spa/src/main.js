import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import GetUser from './components/GetUser.vue'
import Users from './components/Users.vue'
import Reg from './components/Reg.vue'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
    routes: [
        {
            path: '/',
            name:'Index',
            component: Index,
        },
        {
            path: '/Users',
            name:'Users',
            component: Users,
        },
        {
            path: '/user/:id',
            name:'GetUser',
            component: GetUser,
            props: true,
        },
        {
            path: '/reg',
            name:'Reg',
            component: Reg,

        },
        {
            path: '/login',
            name:'Login',
            component: Login,
            props: true,
        },
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})