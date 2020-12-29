import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Amir from '@/components/Amir'
import Admin from '@/pages/admin/Admin'
Vue.use(Router)

export default new Router({
  routes: [
        {
      path: '/amir',
      name: 'Amir',
      component:Amir
    },
         {
      path: '/admin',
      name: 'Admin',
      component:Admin
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  
  ]
})
