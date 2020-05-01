import Vue from 'vue'
import vuetify from './plugins/vuetify';
import mb from './plugins/mb';
import VueRouter from 'vue-router';
import store from './store/index';
import VueSocketIO from 'vue-socket.io';
import VueWorker from 'vue-worker';
import {SERVER} from './config.json';

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueWorker);
Vue.use(mb,{
  vuex:{
    store,
  }
});
Vue.config.productionTip = false

const router = new VueRouter({//{{{
  mode:'history',
  routes:[{
    path:'/',
    redirect:'organization',
  },{
    path:'/profile',
    name:'profile',
    component:require('@/components/view/profile').default,
    meta:{
      reqAuth:true
    },
  },{
    path:'/channel/:uuid',
    name:'channel',
    props:true,
    component:require('@/components/view/channel/channel').default,
    redirect:'/channel/:uuid/chat',
    meta:{
      reqAuth:true
    },
    children:[{
      path:'home',
      redirect:'chat'
    },{
      path:'chat',
      name:'channelChat',
      props:true,
      component:require('@/components/chat/conversation').default,
      meta:{
        reqAuth:true,
        shortName:'chat'
      },
    },{
      path:'members',
      name:'channelMembers',
      props:true,
      component:require('@/components/view/channel/members').default,
      meta:{
        reqAuth:true,
        shortName:'members'
      },
    },{
      path:'playlists',
      name:'channelPlaylists',
      props:true,
      component:require('@/components/view/channel/playlists').default,
      meta:{
        reqAuth:true,
        shortName:'playlists'
      },
    }]
  },{
    path:'/organization',
    name:'organization',
    component:require('@/components/view/organizations').default,
    meta:{
      reqAuth:true
    },
  }]
})//}}}
/*
router.beforeEach((to, from, next) => {
  if (to.meta.reqAuth) {
    if (!store.getters.TOKEN) {
      next('/');
    } else {
      next();
    }
  } else {
    next('/');
  }
})*/
/*
socket "/socket", FaithfulWordApi.UserSocket,
    websocket: true,
    longpoll: false
*/
//socket.io{{{
/*
import io from "socket.io-client";
console.log(`${SERVER.PROTOCOL}://${SERVER.ADDRESSES[SERVER.CHOSEN_ADDRESS]}:${SERVER.PORT}`)

Vue.use(new VueSocketIO({
    debug: false,
    connection: io(`${SERVER.PROTOCOL}://${SERVER.ADDRESSES[SERVER.CHOSEN_ADDRESS]}:${SERVER.PORT}`,
     {transports: ['websocket'], upgrade: false} 
    ),
      //'http://localhost:3001'), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      //mutationPrefix: "SOCKET_"
    }
  })
);
*/
//socket.io}}}

//pheonix{{{
//import { Socket} from 'phoenix-socket';
//FaithfulWordApi.UserSocket
/*let socket = new Socket("wss://japheth.ca/socket")//faithfulword.app
console.log(socket)
socket.connect();*/

/*let channel = socket.channel("links", {});
channel.join()
  .receive("ok", resp => { console.log("Feed Joined successfully", resp) })
  .receive("error", resp => { console.log("Feed Unable to join", resp) })
channel.on('new_link_added', payload => {
  console.log("from Phoenix", payload)
  //this.links.push(payload.link)
});*/

//pheonix}}}
//pushex{{{
/*
import { Pushex } from 'pushex';
const pushex = new Pushex('ws://localhost:4004/push_socket/websocket?vsn=2.0.0', {
  getParams: () => Promise.resolve({ token: 'myToken' }),
  onConnect: (pushEx) => {console.log('ready to receive pushes',pushEx)},
  onConnectionError: (pushEx) => {console.log('error')},
})
pushex.connect();
pushex
  .subscribe('test')
  .bind('*', (event, data) => {
    console.log('user-1 channel received event/data', event, data)
  })
*/
/*
 {
    "channel": ["test", "test2", "test"],
    "data": "data",
    "event": "woohoo"
  }
 */

//pushex}}}
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
