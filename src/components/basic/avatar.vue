<!--template{{{-->
<template>
  <div>
    <v-avatar
      v-if='user && user.mini_picture_url'
      tile
      size='38'
      >
      <img
        :src='user.mini_picture_url'
        :alt="user.name"
        />
    </v-avatar>
      <v-avatar
        v-else
        size='38'
        >
        <v-icon>
          mdi-account-circle
          </v-icon>
        </v-avatar>
        hejo
  </div>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'mainAvatar',
  created(){//{{{
  },//}}}
  components:{//{{{
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
