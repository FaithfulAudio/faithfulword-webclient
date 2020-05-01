<!--template{{{-->
<template>
  <div>
<v-container
        fluid
        class='pa-0 ma-0'
        >
        <v-layout
          column
          class='fill-height align-center justify-center'
          
          >
      <v-card
        flat
        width='100%'
        color='transparent'
        height='calc(100vh - 154px)'
        style='overflow:hidden'
        >
        <v-layout
          column
          justify-end
          fill-height
          >
        <mbMessage
          v-for='message in messages'
          :key='message.uuid'
          :message='message'
          :user='users[message.authorID]'
        /> 
        </v-layout>
      </v-card>
      </v-layout>
      </v-container>
  <v-toolbar
    color='#444444'
    class='mbAccentBG'
    style='border-left:1px solid #aaa'
    >
      <v-text-field
        dense
        outlined
        style='background:rgba(255,255,255,0.4);border:1px solid #aaa'
        class='mbGlass'
        @keyup.enter='sendMessage($event)'            
        hide-details
        >

        </v-text-field>
        <v-btn
          icon
          class='mbPaper ml-2'
          color='orange'
          >
          <v-icon
            >mdi-send</v-icon>
          </v-btn>
        </v-toolbar>
  </div>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'conversation',
  created(){//{{{
  },//}}}
  props:{//{{{
    conversation:Object
  },//}}}
  components:{//{{{
    mbMessage:require('./message').default
  },//}}}
  computed:{//{{{
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      messages:[{
        uuid:'1',
        date:'10.12.2019',
        text:'test test test  skjhf skf sklf dkls dkad fkslk dksd goas fksd fods fksd flsdf kfngfsl fkwsdf ksd fosd fslkdf kd fosd fkddb fdl fdlskdf kds dof kslbes shfksjfdhksf skjdhfksjfd ksldfhlshdf',
        authorID:'1'
      },{
        uuid:'2',
        date:'10.12.2019 12:35',
        text:'dwa dwa',
        authorID:'2'
      }],
      users:{
        '1':{
          uuid:1,
          name:'marco',
          surname:'polo'
        },
        '2':{
          uuid:2,
          name:'amerigo',
          surname:'vespucci'
        },
      }
    }
  },//}}}
  methods:{//{{{
    sendMessage(event){//{{{
      console.log(event.target.value);
      this.messages.push({
        uuid:Math.random(),
        text:event.target.value,
        authorID:'2'
      })
      event.target.value='';

    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
