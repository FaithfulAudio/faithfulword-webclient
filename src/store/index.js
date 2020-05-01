import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import {normalize} from 'normalizr';
import {User} from './schemas';
import {SERVER} from '../config.json';
axios.defaults.baseURL=`${SERVER.PROTOCOL}://${SERVER.ADDRESSES[SERVER.CHOSEN_ADDRESS]}${SERVER.PORT?(":"+SERVER.PORT):""}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(Vuex);
function compareIDs(_id1,_id2){//{{{
  return JSON.stringify(_id1)===JSON.stringify(_id2);
}//}}}
function copy(obj){//{{{
  //return Object.assign({},obj)
  return JSON.parse(JSON.stringify(obj));
}//}}}
var store;
class Utils{//{{{
  async runAPI(context,url,data,opts){//{{{
    console.log(url,data,opts)
    const res=await context.dispatch('sendPost',{
      url,data,opts
    });
    return res;
  }//}}}
  setSnack(context,data){//{{{
    if(data.show){
      context.commit('SET_SNACK_COMMENT',data);
      context.commit('SET_SNACK',true);
    }
  }//}}}
  playSound(context,data){//{{{
    if(data.play){
      context.commit('PLAY_SOUND',data);
    }
  }//}}}

  update(collection,_id,data){//{{{
    Vue.set(collection,_id,{...collection[_id],...data});
    return this;
  }//}}}
  create(collection,item){//{{{
    Vue.set(collection,item._id,item);
    return this;
  }//}}}
}//}}}
const utils=new Utils();
store={//{{{
  state:{//{{{
    core:{//{{{
    },//}}}
    app:{//{
      entities:{},
      token:null,
      userID:null,
      NS:{//{{{
        mutation:{//{{{
          //core{{{
          CLIENT_TOKEN_SET:'CLIENT_TOKEN_SET',
          CLIENT_SET_USER:'CLIENT_SET_USER',
          CLIENT_REMOVE_USER:'CLIENT_REMOVE_USER',
          //core}}}
        },//}}}
        action:{//{{{
          //core{{{
          CALL_API:'CALL_API',
          CALL_API_AUTH:'CALL_API_AUTH',
          //core}}}
        },//}}}
        error:{},
        getter:{//{{{
          //core{{{
          USER:'USER',
          TOKEN:'TOKEN',
          ORGANIZATIONS:'ORGANIZATIONS',
          ENTITIES:'ENTITIES',
          CHANNELS_OF_ORGANIZATION:'CHANNELS_OF_ORGANIZATION',
          CURRENT_ORGANIZATION:'CURRENT_ORGANIZATION',
          CHANNEL_BY_ID:'CHANNEL_BY_ID',
          //core}}}
        },//}}}
        api:{//{{{
          //core{{{
          LOG_IN:'LOG_IN',
          LOG_OUT:'LOG_OUT',
          GET_ME:'GET_ME',

          ORGANIZATION_ADD:'ORGANIZATION_ADD',
          ORGANIZATION_EDIT:'ORGANIZATION_EDIT',
          ORGANIZATION_DELETE:'ORGANIZATION_DELETE',
          CHANNEL_ADD:'CHANNEL_ADD',
          CHANNEL_EDIT:'CHANNEL_EDIT',
          CHANNEL_DELETE:'CHANNEL_DELETE',
          PLAYLIST_ADD:'PLAYLIST_ADD',
          PLAYLIST_EDIT:'PLAYLIST_EDIT',
          PLAYLIST_DELETE:'PLAYLIST_DELETE',
          MEDIAITEM_ADD:'MEDIAITEM_ADD',
          MEDIAITEM_EDIT:'MEDIAITEM_EDIT',
          MEDIAITEM_DELETE:'MEDIAITEM_DELETE',
          CLIENT_IMPLEMENTATION_ERROR:'CLIENT_IMPLEMENTATION_ERROR',
          //core}}}
        },//}}}
        url:{//{{{
          LOG_IN:'/auth/identity/callback',
          LOG_OUT:'',//'/auth/identity/callback',
          GET_ME:'/me',//'/auth/identity/callback',
          DEV_TEST:'/v1.3/search',
          ORGANIZATION_ADD:'/v1.3/orgs/addorupdate',
          ORGANIZATION_EDIT:'/v1.3/orgs/addorupdate',
          ORGANIZATION_DELETE:'/v1.3/orgs/delete',
          CHANNEL_ADD:'/v1.3/channels/addorupdate',
          CHANNEL_EDIT:'/v1.3/channels/addorupdate',
          CHANNEL_DELETE:'/v1.3/channels/delete',
          PLAYLIST_ADD:'/v1.3/playlists/addorupdate',
          PLAYLIST_EDIT:'/v1.3/playlists/addorupdate',
          PLAYLIST_DELETE:'/v1.3/playlists/delete',
          MEDIAITEM_ADD:'/v1.3/mediaitem/addorupdate',
          MEDIAITEM_EDIT:'/v1.3/mediaitem/addorupdate',
          MEDIAITEM_DELETE:'/v1.3/mediaitems/delete',
        },//}}}
        icon:{//{{{
        },//}}}
        color:{//{{{
          primary:'#2196f3',
          secondary:'#607d8b',
          accent:'#03a9f4',
          error:'#f44336',
          warning:'#ffc107',
          info:'#00bcd4',
          success:'#4caf50',
          orange:'orange',
          brown:'brown',
          blue:'#1565C0',
          green:'#76FF03',
          black:'#000',
        }//}}}
      },//}}}
    },//}}}
  },//}}}
  getters:{//{{{
    //core{{{
    //core}}}
    //app{{{
    NS(state){//{{{
      return state.app.NS;
    },//}}}
    USER(state){//{{{
      if(state.app.userID){
        return state.app.entities.users[state.app.userID];
      }
      return null;
    },//}}}
    TOKEN(state){//{{{
      return state.app.token;
    },//}}}
    ORGANIZATIONS(state){//{{{
      return state.app.entities && state.app.entities.organizations?
        Object.values(state.app.entities.organizations):
        [];
    },//}}}
    CHANNELS_OF_ORGANIZATION(state){//{{{
      let uuid=Object.values(state.app.entities.organizations)[0].uuid;
      return state.app.entities.organizations[uuid].channels.map(channel=>{
        return state.app.entities.channels[channel];
      })
    },//}}}
    CURRENT_ORGANIZATION(state){//{{{
      //z usera bedzie
      let organizations=Object.values(state.app.entities.organizations);
      return organizations.length?
        organizations[0]:
        null;
    },//}}}
    ENTITIES(state){//{{{
      return state.app.entities;
    },//}}}
    CHANNEL_BY_ID(state){//{{{
      return state.app.entities.channels;//[uuid]};
    },//}}}

    //app}}}
  },//}}}
  actions:{//{{{
    //core{{{
    async sendPost(context,{data,url,opts}){//{{{
      console.log(data,url,opts)
      let res=await axios.post(
        `/api${url}`,
        JSON.stringify(data),
        opts
      )
      return res.data;
    },//}}}
    async CALL_API(context,{name,data}){//{{{
      let res=await utils.runAPI(context,name,data,{
        'Content-Type': 'application/json',
      });
      return res;
    },//}}}
    async CALL_API_AUTH(context,{name,data}){//{{{
      let res=await utils.runAPI(context,name,data,{
        headers:{
          'Authorization':`Bearer ${context.state.app.token}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        }
      });
      return res;
    },//}}}
    //core}}}
    //app{{{
    //wlasny NS
    //app}}}
  },//}}}
  mutations:{//{{{
    //core{{{
    //core}}}
    //app{{{
    CLIENT_SET_USER(state,{user,pattern}){//{{{
      let result=normalize(user,User);
      console.log(result)
      Vue.set(state.app,'userID',result.result);
      Vue.set(state.app,'entities',{...pattern.entities,...result.entities});
    },//}}}
    CLIENT_REMOVE_USER(state){//{{{
      Vue.set(state.app,'userID',null);
      Vue.set(state.app,'entities',{});
    },//}}}
    CLIENT_TOKEN_SET(state,{token}){//{{{
      state.app.token=token;
    },//}}}
    //app}}}
  },//}}}
}//}}}

export default new Vuex.Store({
  namespaced: true,
  mutations:store.mutations,
  actions:store.actions,
  getters:store.getters,
  state:store.state
});
