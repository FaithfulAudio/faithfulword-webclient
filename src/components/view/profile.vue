<!--template{{{-->
<template>
  <div>
   profile 
  </div>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'profile',
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
