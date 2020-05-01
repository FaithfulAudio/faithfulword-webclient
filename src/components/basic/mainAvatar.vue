<!--template{{{-->
<template>
  <div
    class='mbCursorPointer'
    >
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          small
          fab
          color='primary'
          >
        <v-avatar
          v-if='user && user.mini_picture_url'
          v-on='on'
          size='38'
          outlined
          >
          <img
            :src='user.mini_picture_url'
            :alt="user.name"
            />
        </v-avatar>
          <v-avatar
            v-else
            v-on='on'
            >
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-avatar>
          </v-btn>
      </template>
      <v-list
        dense
        >
<v-list-item
          v-if='user'
               @click='$router.push({name:"profile"})'
          >
          <v-list-item-title
            >
            profile
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-if='user'
          @click='logOut'
          >
          <v-list-item-title>
            log out
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if='!user'
          @click='showLogInDialog'
          >
          <v-list-item-title>
            log in
          </v-list-item-title>
        </v-list-item>

      </v-list>
    </v-menu>

    <!--dialog{{{-->
    <v-dialog
      persistent
      width='500'
      v-model='dialog'
      >
      <v-card>
        <mb-log-in-form
          @onClose='dialog=false'
          />
      </v-card>
    </v-dialog>
    <!--dialog}}}-->
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
    mbLogInForm:require('../form/logIn').default,
  },//}}}
  computed:{//{{{
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      dialog:false
    }
  },//}}}
  methods:{//{{{
    showLogInDialog(){//{{{
      this.dialog=true;
    },//}}}
    logOut(){//{{{
      this.$mb.set(this.appNS.mutation.CLIENT_REMOVE_USER,{})
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
