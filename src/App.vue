<!--template{{{-->
<template>
  <v-app
    >
    <mb-toolbar
      title='NIFB'
      />
      <v-divider></v-divider>
      <v-content
    class='mbBG'
        >
        <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        </transition>
      </v-content> 
      <mb-drawer
        :user='user'
        />
        <mb-snack-info
          v-if='user && !user.email_confirmed'
          :user='user'
          info='verify email'
          @onClose=''
          />
          
          <!--<v-btn
            @click='getMe'
            >get me
          </v-btn>-->
  </v-app>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
var api=require('./jsons/api.json');
var utils=require('./core/utils');
export default {
  name: 'App',
  created(){//{{{
    /*api.resources.forEach(r=>{
      console.log(r.url)
    })*/


  },//}}}
  components:{//{{{
    mbToolbar:require('./components/core/toolbar').default,
    mbDrawer:require('./components/core/drawer').default,
    mbSnackInfo:require('./components/basic/snackInfo').default
  },//}}}
  computed:{//{{{
    token(){//{{{
      return this.$mb.get(this.appNS.getter.TOKEN);
    },//}}}
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      getmeee:null
    }
  },//}}}
  methods:{//{{{
    async getMe(){//{{{
      try{
        this.loader=true;
        let res=await this.$mb.callAPIAuth(this.appNS.url.GET_ME,{
        })
        this.getmeee=res;
      }catch(err){
        console.log(err) 
      }
    },//}}}
    fullScreen(){//{{{
      var elem =document.body.id;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      } 
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
body{
  overflow: hidden;
}
.mbCursorDefault{
  cursor:default
}
.mbCursorPointer{
  cursor:pointer
}
.mbBG{
  background-repeat:repeat;
  background-color: #fffff;
  background-image: url("https://www.transparenttextures.com/patterns/grunge-wall.png");
}
.mbGlass{
  backdrop-filter:blur(5px);
}
.mbPaper{
  background-image: url(data:image/png;base64,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);
  background-repeat:repeat;
}
.mbAccentBG{
  /*background: #ffff00;
  background-image:linear-gradient(90deg, transparent 59px, #abced4 59px, #abced4 61px, transparent 61px),linear-gradient(#eee .1em, transparent .1em);
  background-size: 100% 1.2em;*/
      background-repeat:repeat;
      background-color: #000000;
      /*    background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
      background-image: url("https://www.transparenttextures.com/patterns/bedge-grunge.png");
      background-image: url("https://www.transparenttextures.com/patterns/dust.png");*/

      background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
      /*background-image: url("https://www.transparenttextures.com/patterns/mooning.png");
      background-image: url("https://www.transparenttextures.com/patterns/redox-01.png");*/
    }
</style>
<!--style}}}-->
