import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
//import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);
const vuetify=new Vuetify({
  icons:{
    iconfont:'mdi'
  },
  theme:{
      primary: '#2196f3',
      secondary: '#607d8b',
      accent: '#03a9f4',
      error: '#f44336',
      warning: '#ffc107',
      info: '#00bcd4',
      success: '#4caf50'
      } 
  /*
  v{
    options: {
      customProperties: true,
    },
    themes:{
      
    }
  },*/
});
export default vuetify;
