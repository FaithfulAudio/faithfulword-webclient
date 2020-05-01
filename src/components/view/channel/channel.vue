<!--template{{{-->
<template>
  <div>
  <v-container
    fluid
    class='pa-0 ma-0'
    style='overflow:hidden'
        height='calc(100pxpx)'
    >
    <!--toolbar{{{-->
    <v-toolbar
      dense
      color='transparent'
      class='elevation:1px'
      >
      <span
        v-if='channel'
        >
        <v-btn
          x-small
          color='success'
          >
          {{channel.basename}} 
      </v-btn>
          {{$route.meta.shortName}}
    </span>
    <v-spacer></v-spacer>
    <!--tabs{{{-->
<!--<v-btn icon
       @click='$router.push({name:"channelMembers",props:{uuid}})'
       :color='$route.name==="channelMembers"?"orange":"grey"'
  >
      <v-icon>mdi-account-group</v-icon>
    </v-btn>
<v-btn icon
       @click='$router.push({name:"channelChat",props:{uuid}})'
       :color='$route.name==="channelChat"?"orange":"grey"'
  >
      <v-icon>mdi-chat-outline</v-icon>
</v-btn>-->
<v-layout
   row
   justify-center
  >
    <v-card
      flat
      color='transparent'
      hover
      v-for='(option,i) in options'
      :key='`option_${i}`'
      class='ml-1 px-2 py-1'
      @click='$router.push({name:option.name,props:{uuid}})'
      >
    <v-layout
      align-center
      column>
      <v-icon
       :color='$route.name===option.name?"primary":"grey"'
        >{{option.icon}}</v-icon>
    <v-card
      flat
      color='transparent'
      class='overline font-weight-thin text-center'
      >{{option.label}}
    </v-card>
    </v-layout>
    </v-card>
  </v-layout>
    <!--tabs}}}-->
    <v-spacer></v-spacer>
    <v-btn
      icon
      small
      color='primary'
      @click='drawer=!drawer'
      >
      <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <!--toolbar}}}-->
    <v-expand-transition>
      <router-view></router-view>
    </v-expand-transition>
      <!--channel drawer{{{-->
  <v-navigation-drawer
    app
    right
    v-model='drawer'
    class='mbBG'
:hide-overlay='true'
    >
    </v-navigation-drawer>
  </v-container>
  <!--channel drawer}}}-->
  </div>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'channel',
  created(){//{{{
  },//}}}
  props:{//{{{
    uuid:String,
  },//}}}
  components:{//{{{
  },//}}}
  computed:{//{{{
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
    channel(){//{{{
      try{
        return this.$mb.get(this.appNS.getter.CHANNEL_BY_ID)[this.uuid];
      }catch(err){
        return null
      }
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      drawer:true,
      conversation:{},
      options:[{
        label:'members',
        name:'channelMembers',
        icon:'mdi-account-group'

      },{
        label:'chat',
        name:'channelChat',
        icon:'mdi-chat-outline'
      },{
        label:'playlist',
        name:'channelPlaylists',
        icon:'mdi-playlist-music-outline'
      }]
    }
  },//}}}
  methods:{//{{{
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
