//import Worker from 'worker-loader!../worker/timer.js';
const mb={
  install(Vue, options) {
    // 1. add global method or property
    Vue.myGlobalMethod = function () {
      // some logic ...
    }

    // 2. add a global asset
    /*Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // some logic ...
      }

    })*/

    // 3. inject some component options
    Vue.mixin({
      created: function () {//{{{
        // some logic ...
        this.appNS=options.vuex.store.getters['NS'];
      },//}}}
      mixins:[require('../mixin/logic').default],
      data:()=>{//{{{
        return {
          appNS:null
        }
      },//}}}
      computed:{//{{{
      },//}}}
      methods:{//{{{
        compareIDs(_id,_id2){//{{{
          return `${_id}`===`${_id2}`;
        },//}}}
      }//}}}
    },)

    // 4. add an instance method
    Vue.prototype.$mb={
      createWorker(){
        //Worker;
      },
      set(name,data){
        options.vuex.store.commit(name,data);
        return this;
      },
      get(name){
        return options.vuex.store.getters[name];
      },
      async callAPI(name,data){//{{{
        let appNS=options.vuex.store.getters['NS'];
        let res=await options.vuex.store.dispatch(appNS.action.CALL_API,{name,data});
        return res;
      },//}}}
      async callAPIAuth(name,data){//{{{
        console.log(name,data)
        let appNS=options.vuex.store.getters['NS'];
        console.log(appNS.action.CALL_API_AUTH)
        let res=await options.vuex.store.dispatch(appNS.action.CALL_API_AUTH,{name,data});
        console.log(res)
        return res;
      },//}}}
    }
    /*Vue.prototype.$mb = function (methodOptions) {
      methodOptions;
      // some logic ...
    }*/
  }

}
export default mb;

