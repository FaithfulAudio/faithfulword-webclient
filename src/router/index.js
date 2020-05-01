//imports{{{
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//imports}}}
export default new Router({
  routes:[
    //app{{{
    {
      path:'/',
      name:'app',
      component:require('@/App.vue'),
      meta:{
        reqAuth:false
      }
    },//app}}}
    //profile{{{
    {
      path:'/profile',
      name:'profile',
      component:require('@/components/view/profile'),
      meta:{
        reqAuth:true
      },
    }//profile}}}
  ]
})
