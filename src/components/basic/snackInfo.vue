<!--template{{{-->
<template>
  <v-snackbar
    v-model='snack'
    top
    class='mt-12'
    color='accent'
    :value='user'
    :timeout=0
    >
    <!--close button{{{-->
    {{info}}
    <v-btn
      icon
      @click='snack=false'
      >
      <v-icon>mdi-close</v-icon>
      </v-btn>
      <!--close button}}}-->
    </v-snackbar>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'snackInfo',
  created(){//{{{
  },//}}}
  components:{//{{{
  },//}}}
  props:{//{{{
    user:Object,
    info:String,
  },//}}}
  computed:{//{{{
  },//}}}
  data:()=>{//{{{
    return {
      snack:true,
    }
  },//}}}
  methods:{//{{{
    onClose(){//{{{
      this.snack=false;
      this.$emit('onClick');
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
