<!--template{{{-->
<template>
  <!--main bar{{{-->
    <v-app-bar
      app
      dense
      light
      elevate-on-scroll
      color='rgba(255,255,255,0.1)'
      class='elevation-1 mbGlass font-weight-thin'
      >{{title}}
        <v-spacer></v-spacer>
      <v-card
        flat
        v-if='user'
        color='transparent'
        >{{user.name}}
      </v-card>
        <!--language{{{-->
        <v-card
          flat
          color='transparent'
          class='ml-2'
          >
          
        </v-card>
        <!--language}}}-->
        <v-card
      <mb-main-avatar />
    </v-app-bar>
    <!--main bar}}}-->
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'toolbar',
  created(){//{{{
  },//}}}
  props:{//{{{
    title:String
  },//}}}
  components:{//{{{
    mbMainAvatar:require('../basic/mainAvatar').default,
  },//}}}
  computed:{//{{{
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
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
