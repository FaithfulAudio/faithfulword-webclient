<!--template{{{-->
<template>
    <!--drawer{{{-->
    <v-navigation-drawer
      v-if='user'
      dark
      app
      class='elevation-5 mbAccentBG'
      permanent>
      <!--<v-toolbar
        dense
        >
      </v-toolbar>-->
        <v-layout row>
      <!--organizations{{{-->
      <v-flex xs3>
        <v-card
          color='rgba(255,255,255,0.1)'
          style='border-radius:0px;border-right:1px solid #aaa'
          class='mbGlass'
          height='calc(100vh - 0px)'
          >
      <v-layout
        align-center
        column>
        <v-btn
          icon
          fab
          small
          outlined
          class='ml-2 mt-2'
          >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
          <v-btn
            icon
            outlined
          tile
            fab
            small
            class='ml-2 mt-1'
            style='border-radius:5px'
            v-for='(org,i) in organizations'
            :key='`org_${org.uuid}`'
            >
          <v-icon>mdi-face</v-icon>
        </v-btn>
      </v-layout>
      </v-card>
      </v-flex>
          <!--organizations}}}-->
            <!--list{{{-->
            <v-flex xs-9>
      <v-list
        dense
        >
        <v-list-item
          v-for='item in items'
          :key='`drawerItem_${item.name}`'
          @click='$router.push({name:item.go}).catch(err=>{})'
          class='font-weight-thin'
          >
          <v-list-item-icon>
            <v-icon
              small
              >mdi-{{item.icon}}
              mdi-close
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title
            class='text-capitalize'
            >{{item.name}}
          </v-list-item-title>
        </v-list-item>
        <!--channels{{{-->
      <v-divider></v-divider>
        <v-list-group
          rounded
          two-line
          active-class="orange--text"
          >
          <v-card
            flat
            color='rgba(255,255,255,0.1)'
            style='border-radius:0px'
            class='mbGlass'
            >
          <v-layout>
            <v-btn
              icon
              @click='addChannel(organization)'
              >
            <v-icon
              small
              >mdi-plus
              </v-icon>
            </v-btn>
          </v-layout>
          </v-card>
          <template #activator>
          <v-list-item-content>
            <v-list-item-title
          class='font-weight-black text-uppercase'
              >Channels</v-list-item-title>
          </v-list-item-content>
          </template>
        <v-list-item
          v-for="channel in channels"
          :key="`item_${channel.basename}`"
          @click='$router.push({name:"channel",params:{uuid:channel.uuid}})'
        >
          <v-list-item-content>
            <v-list-item-title
          class='font-weight-bold'
              >{{channel.basename}}</v-list-item-title>
            <v-list-item-subtitle>{{channel.short_name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>
      <v-divider></v-divider>
      <!--channels}}}-->
      </v-list>

      </v-flex>
      <!--list}}}-->
      </v-layout>
    </v-navigation-drawer>
    <!--drawer}}}-->
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'drawer',
  created(){//{{{
  },//}}}
  components:{//{{{
  },//}}}
  props:{//{{{
    user:Object,
  },//}}}
  computed:{//{{{
    organization(){//{{{
      return this.$mb.get(this.appNS.getter.CURRENT_ORGANIZATION);
    },//}}}
    organizations(){//{{{
      return this.$mb.get(this.appNS.getter.ORGANIZATIONS);
    },//}}}
    channels(){//{{{
      return this.$mb.get(this.appNS.getter.CHANNELS_OF_ORGANIZATION);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      items:[{
        name:'profile',
        icon:'face',
        go:'profile'
      },{
        name:'channels',
        icon:'face',
        go:'channel'
      },{
        name:'organizations',
        icon:'face',
        go:'organization'
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
