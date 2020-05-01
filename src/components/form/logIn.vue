<!--template{{{-->
<template>
  <div>
    
      <v-card
        width=500
        class='mbBG'
        >
        <v-layout
          row
          >
          <v-flex
            xs1
            >
          <v-card
            height='100%'
            style='border-radius:0px;background-color:#333333;'
            class='mbAccentBG'
            >
          </v-card>
            </v-flex>
            <v-flex
              xs11
              >
            <v-card
              flat
              color='transparent'
            style='border-radius:0px'
              >
        <v-toolbar
          flat
          dense
          color='rgba(255,255,255,0.1)'
          class='elevation-1 text-uppercase mbGlass'
          >log in
        </v-toolbar>

          <v-card
            flat
            color='transparent'
            class='pa-10'
            >

            <!--form{{{-->
            <v-form
              v-model='valid'
              >
              <!--inputs{{{-->
              <!--email-->
              <v-text-field
                dense
                outlined
                label='Email'
                >
                <template #prepend-inner>
                <v-icon small
                  class='mt-1'
                  color='primary'
                  >mdi-email
                </v-icon>
                </template>
              </v-text-field>
              <!--email-->
                <v-text-field
                  dense
                  outlined
                  label='Password'
                  >
<template #prepend-inner>
                <v-icon small
                  class='mt-1'
                  color='primary'
                  >mdi-lock
                </v-icon>
                </template>
                </v-text-field>
                  <!--inputs}}}-->
        <!--buttons{{{-->
      <v-layout
        row
        class='justify-end'
        >

        <v-btn
          small
          class='mr-2 mbPaper'
          color='accent'
          @click='onClose'
          >cancel
        </v-btn>

          <v-btn
            small
            color='primary'
            class='mr-3 mbPaper'
            @click='onSubmit'
            >log in
          </v-btn>

      </v-layout>
      <!--buttons}}}-->
            </v-form>
            <!--form}}}-->
          </v-card>
          </v-card>
          </v-flex>
          </v-layout>
<v-overlay
   :absolute='overlay'
      :value='overlay'
      >
            <!--loader{{{-->
            <v-progress-circular
              size=24
              class='ml-2'
              width=1
              :indeterminate='loader'
              >
              <v-icon
                small
                >mdi-arrow-right
              </v-icon>
            </v-progress-circular>
              <!--loader}}}-->
      logging in...
    </v-overlay>
      </v-card>
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
      valid:false,
      loader:false,
      overlay:false,
    }
  },//}}}
  methods:{//{{{
    beforeSubmit(){//{{{
      console.log('hmmmm?')
      this.loader=true;
      this.overlay=true;
    },//}}}
    onClose(){//{{{
      this.$emit('onClose');
      this.loader=false;
      this.overlay=false;
    },//}}}
    async onSubmit(){//{{{
      try{
        this.beforeSubmit(); 
        let res=await this.$mb.callAPI(this.appNS.url.LOG_IN,{
          email:"joseph@faithfulword.app",
          password:"password"
        })
        this.$mb
          .set(this.appNS.mutation.CLIENT_SET_USER,{
            user:res.user,
            pattern:{}
          })
          .set(this.appNS.mutation.CLIENT_TOKEN_SET,{
            token:res.token
          })
        this.onClose();
        //console.log(res)
      }catch(err){
        console.log(err) 
      }
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
