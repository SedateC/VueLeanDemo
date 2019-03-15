import Vue from 'vue'
import Router from 'vue-router'
import account from '@/components/account'
import goodlist from "@/components/goodlist"
import login from '@/components/login'
import register from '@/components/register'
import { Toast } from 'mint-ui';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account',component:account,
      children:[
        {path: 'login', component:login},
        {path: 'register', component:register}
      ]
    },
    {
      path: '/goodlist',component:goodlist
    }

/*    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
  ]
})
