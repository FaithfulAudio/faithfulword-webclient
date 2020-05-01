<!--template{{{-->
<template>
    <v-card
      :width='width'
      >
      <v-card
        :class='obj.banner_path?"":"mbEmptyImage"'
        min-height='200px'
        >
        <!--<object
          v-if='obj.banner_path'
          data='https://via.placeholder.com/600x200.png?text=invalid+image+path'
          :class='obj.banner_path?"":"mbEmptyImage"'>-->
        <v-img
          cover
          v-if='obj.banner_path'
          v-show='obj.banner_path'
          width='100%'
          :src='obj.banner_path'
          @error='onImgError'
          :key='`banner_${bannerKey}`'
          >
        </v-img>
          <!--</object>-->
        <!--toolbar{{{-->
      <v-toolbar
        dense
        light
        width='100%'
        color='rgba(255,255,255,0.5)'
        class='text-capitalize'
        style='backdrop-filter:blur(5px);position:absolute;top:0px'
        >
        <v-btn
          x-small
          outlined
          color='success'
          class='mr-2'
          >
        <v-icon
          small
          color='success'
          >mdi-pencil</v-icon>
        </v-btn>
          {{title}}:<span class='font-italic'><span class='font-weight-bold ml-1'>{{obj.basename?obj.basename:"no name"}}</span>
            <span class='font-weight-thin caption ml-1'>({{obj.shortname?obj.shortname:"no short name"}})</span></span>
        <v-spacer></v-spacer>

        <!--info{{{-->
        <v-menu
          offset-y
          left
          v-model='infoMenu'
          color='transparent'
          >
          <template
          #activator='{on}'
            >
        <v-btn
          small
          icon
          v-on='on'
          color='primary'
          >
          <v-icon
            >mdi-information
            </v-icon>
        </v-btn>
          </template>
            <v-card
              color='rgba(255,255,255,0.9)'
              class='mbGlass'
              >
            <v-list
              dense
              color='transparent'
              >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{obj.uuid}}</v-list-item-title>
                  <v-list-item-subtitle>uuid</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{obj.inserted_at}}</v-list-item-title>
                  <v-list-item-subtitle>inserted at</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{obj.updated_at}}</v-list-item-title>
                  <v-list-item-subtitle>updated at</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

            </v-list>
            </v-card>
          </v-menu>
          <!--info}}}-->
        <!--more options btn{{{-->
        <v-menu
          offset-y
          left
          v-model="menu"
          :close-on-content-click="true"
          >
          <template #activator="{ on }">
          <v-btn
            v-on='on'
            icon
            small
            >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          
          </template>
          <v-card>
            <v-list
              dense
              >
              <v-list-item
                @click='deleteOrganization'
                >
                <v-list-item-action>
                  <v-icon
                    small
                    color='error'
                    >mdi-delete
                  </v-icon>
                  </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <!--more options btn}}}-->
      </v-toolbar>
      <!--toolbar}}}-->
      </v-card>
        <v-card
          flat
          color='transparent'
          class='px-12 py-4 mbBG'
          >
          <!--form{{{-->
          <v-form
            v-model='valid'
            >
            <!--inputs{{{-->
            <v-card
              color=rgba(255,255,255,0.5)
class='pt-2 pa-1 mb-5'
              style='margin-top:-72px;backdrop-filter:blur(5px)'
              >
              <v-text-field
                dense
               class='mx-0 mb-0 caption'
                outlined
               hide-details
                  label='Banner path'
                  v-model='obj.banner_path'
                  >
                </v-text-field>
  </v-card>
              <!--row zero{{{-->
            <v-layout
              row
              v-if='item'
              >
              <!--metadata{{{-->
                <!--<v-card
                  flat
                  >
              <v-subheader>
                  Inserted at: {{item.inserted_at}}
              </v-subheader>
                  </v-card>
                  <v-card
                    flat
                    >
              <v-subheader>
                    Updated at: {{item.updated_at}}
              </v-subheader>
                  </v-card>-->
                    <!--metadata}}}-->
              <v-spacer></v-spacer>

            </v-layout>
            <!--row zero}}}-->
              <!--first row{{{-->
            <v-layout
              row
              class='mx-0 mb-1'
              >
             
              <v-flex xs7>
                <v-text-field
                dense
                outlined
               hide-details
                  class='mr-1'
                  v-model='obj.basename'
                  label='Base name'
                  >
                </v-text-field>
              </v-flex>
              <v-flex xs5>
                <v-text-field
                dense
                outlined
               hide-details
                  label='Short name'
                  v-model='obj.shortname'
                  >
                </v-text-field>
              </v-flex>
      
            </v-layout>
            <!--first row}}}-->

            <!--thumbnails{{{-->
            <v-subheader>Thumbnails:</v-subheader>
            <v-layout
              row
              justify-space-between
              align-center
              class='mx-0'
              >
              <v-flex xs4
                      v-for='(thumbnail,i) in thumbnails'
                      :key='`thumbnail_${thumbnail.name}`'
                      >
                      <v-text-field
                        dense
                        outlined
                        hide-details
                        class='mb-1 mr-1 caption'

                        v-model='obj[thumbnail.variable]'
                        :label='thumbnail.name'
                        >
                      </v-text-field>
              </v-flex>
            </v-layout>
              <v-layout
                row
                justify-space-between
                align-center
                class='mx-0'
                >
                <v-flex xs4
                        v-for='(thumbnail,i) in thumbnails'
                        :key='`thumbnail_preview_${thumbnail.name}`'
                        >
            <v-card
              hover
              style='border-radius:5px;overflow:hidden'
              :class='`${obj[thumbnail.variable]?"":"mbEmptyImage"} mr-1 pa-0`'
              min-height='50'
              >
<v-slide-y-transition>
              <v-img
                contain

          v-if='obj[thumbnail.variable]'
                v-show='obj[thumbnail.variable]'
                :src='obj[thumbnail.variable]'
                class="grey darken-4 ma-0"
                width='100%'
                max-width='200'
                alt='small thumbnail'
                >
              </v-img>
              </v-slide-y-transition>
                <v-chip
                  small
                  label
                  color='rgba(255,255,255,0.5)'
                  style='position:absolute;left:3px;top:3px;backdrop-filter:blur(5px)'
                  >{{thumbnail.abbrev}}
                </v-chip>
            </v-card>
    </v-flex>
                        <!--thumbnails}}}-->

      

              <!--</v-layout>-->
    
</v-layout>

              <!--inputs}}}-->
            <!--<v-subheader>Localizations</v-subheader>-->
                <!--buttons{{{-->
      <v-layout
      row
      class='mx-0 mt-3 justify-end text-capitalize'
      >

                 <v-btn
                   small
                  color='accent'
                  @click='onClose'
                  class='text-capitalize mr-2'
                  >cancel
                </v-btn>
                <v-btn
                  small
                  color='primary'
                  @click='onSubmit'
                  class='text-capitalize'
                  >confirm

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
                </v-btn>
                  </v-layout>
                  <!--buttons}}}-->
          </v-form>
          <!--form}}}-->
        </v-card>
    </v-card>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'editChannel',
  created(){//{{{
    this.obj={...{},...this.item}
  },//}}}
  props:{//{{{
    width:Number,
    item:Object,
  },//}}}
  watch:{//{{{
    item(value){//{{{
      this.obj={...{},...value};
    },//}}}
    'obj.banner_path':function(value){
      /*forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      }*/
      /*this._vm.nextTick(()=>{
        
      this.imgError=
      })*/
    }
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
      bannerKey:0,
      menu:false,
      infoMenu:false,
      valid:false,
      loader:false,
      title:'channel',
      obj:{
        small_thumbnail_path:'',
        med_thumbnail_path:'',
        large_thumbnail_path:'',
        banner_path:'',
        basename:'',
        hash_id:'',
        shortname:'',
      },
      thumbnails:[{
        variable:'small_thumbnail_path',
        name:'small',
        abbrev:'S'
      },{
        variable:'med_thumbnail_path',
        name:'medium',
        abbrev:'M'
      },{
        variable:'large_thumbnail_path',
        name:'large',
        abbrev:'L'
      }]
    }
  },//}}}
  methods:{//{{{
    onClose(){//{{{
      this.$emit('onClose');
      this.loader=false;
    },//}}}
    async onSubmit(){//{{{
      try{
        this.loader=true;
        console.log(this.obj)
        let res=await this.$mb.callAPI(this.appNS.url.LOG_IN,{
          email:"joseph@faithfulword.app",
          password:"password"
        })
        /*
        this.$mb
          .set(this.appNS.mutation.CLIENT_SET_USER,{
            user:res.user,
            pattern:{}
          })
          .set(this.appNS.mutation.CLIENT_TOKEN_SET,{
            token:res.token
          })*/
        this.onClose();
        //console.log(res)
      }catch(err){
        console.log(err) 
      }
    },//}}}
    async deleteOrganization(){//{{{
      console.log(this.item)
    },//}}}
    onImgError(){//{{{
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
.mbEmptyImage{
  /*background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVQYV2NMqL7ty4ADMIIkF7SqbsYmP+gkAbAbGgsk/ddhAAAAAElFTkSuQmCC) repeat;
  */
      background-repeat:repeat;
      background-color: #242424 !important;
      /*background-image: url("https://www.transparenttextures.com/patterns/light-sketch.png");
      background-image: url("https://www.transparenttextures.com/patterns/old-mathematics.png");
      background-image: url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png");*/
      
background-image: url("https://www.transparenttextures.com/patterns/whitey.png");
}
.mbGlass{
  backdrop-filter:blur(5px) !important;
}
</style>
<!--style}}}-->
