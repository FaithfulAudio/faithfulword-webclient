<!--template{{{-->
<template>
    <v-card
      :width='width'
      >
      <v-card
        :class='obj.banner_path?"":"mbEmptyImage"'
        min-height='200px'
        >
        <v-img
          v-show='obj.banner_path'
          cover
          width='100%'
          :src='obj.banner_path'
          >
        </v-img>
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
        <!--close btn{{{-->
        <v-btn
          icon
          small
          @click='onClose'
          >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!--close btn}}}-->
      </v-toolbar>
      <!--toolbar}}}-->
      </v-card>
        <v-card
          flat
          color='transparent'
          class='px-12 py-4'
          >
          <!--form{{{-->
          <v-form
            v-model='valid'
            >
            <!--inputs{{{-->
            <v-card
              color=rgba(255,255,255,0.5)
class='pt-2 pa-1 mb-3'
              style='margin-top:-72px;backdrop-filter:blur(5px)'
              >
<v-text-field
   color='red'
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
                <v-card
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
                    </v-card>
                    <!--metadata}}}-->
              <v-spacer></v-spacer>
        <!--info{{{-->
        <v-tooltip
          bottom
          dark
          color='accent'
          >
          <template
          #activator='{on}'
            >
        <v-btn
          icon
          v-on='on'
          color='primary'
          >
          <v-icon
            >mdi-information
            </v-icon>
        </v-btn>
          </template>
          <template>hejo</template>
          </v-tooltip>
          <!--info}}}-->

            </v-layout>
            <!--row zero}}}-->
              <!--first row{{{-->
            <v-layout
              row
              class='mx-0 mb-1'
              >
              <v-flex xs3>
                <v-text-field
                dense
                outlined
               hide-details
                  v-model='obj.ordinal'
                  label='Ordinal'
                  type='number'
                  class='mr-1'
                  >
                </v-text-field>
              </v-flex>
              <v-flex xs5>
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
              <v-flex xs4>
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
  },//}}}
  props:{//{{{
    width:Number,
    item:Object,
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
        let res=await this.$mb.callAPI(this.appNS.url.LOG_IN,{
          email:"joseph@faithfulword.app",
          password:"password"
        })
        console.log(res)
        
        /*this.$mb
          .set(this.appNS.mutation.,{
            user:res.user,
            pattern:{}
          })
          .set(this.appNS.mutation.CLIENT_TOKEN_SET,{
            token:res.token
          })*/
        this.onClose();
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
.mbEmptyImage{
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVQYV2NMqL7ty4ADMIIkF7SqbsYmP+gkAbAbGgsk/ddhAAAAAElFTkSuQmCC) repeat;
}
</style>
<!--style}}}-->
