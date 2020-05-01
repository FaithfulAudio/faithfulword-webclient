<!--template{{{-->
<template>
  <v-card
    flat
    color='rgba(255,255,255,0.1)'
    class='mbGlass'
    >
    <v-divider
      ></v-divider>
    <v-layout row>
      <v-flex xs2 sm1 md1 lg1>
        <v-layout
          justify-center
          >
      <v-avatar
        tile
        >
        <v-icon>mdi-face</v-icon>
      </v-avatar>
          </v-layout>
    </v-flex>
    <v-flex xs10 sm11 md11 lg11>
      <v-card
        flat
        color='transparent'
        >
      <v-layout column>
        <v-system-bar
          color='transparent'
          class='caption text-capitalize pr-3'
          ><span
             class='font-weight-bold mr-2'
            >{{user.name}} {{user.surname}}
            </span>
            <v-spacer></v-spacer>
              {{message.date}}
              <v-btn
                icon
                small
                >
                <v-icon
                  small
                  >mdi-dots-vertical</v-icon>
                </v-btn>
        </v-system-bar>
          <v-card
            flat
            class='pa-1 pr-5 font-weight-thin body-2'
            color='transparent'
            >{{message.text}} 
          </v-card>
      </v-layout>
        </v-card>
    </v-flex>
    </v-layout>
  </v-card>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'message',
  created(){//{{{
  },//}}}
  props:{//{{{
    message:Object,
    user:Object,
  },//}}}
  components:{//{{{
  },//}}}
  computed:{//{{{
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
