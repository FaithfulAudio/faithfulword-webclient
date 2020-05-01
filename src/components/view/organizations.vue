<!--template{{{-->
<template>
  <v-container
    fluid
    >
    <!--add btn{{{-->
    <v-btn
      small
      color='primary'
      @click='addOrganization'
      class='text-capitalize mb-2 mbPaper px-1'
      >
      <v-progress-circular
        :indeterminate='loader'
        size=24
        width='1'
              class='mr-2'
        >
      <v-icon
        small
        >mdi-plus</v-icon>
      </v-progress-circular>
      add channel
    </v-btn>
    <!--add btn}}}-->
    <!--edit channel temporary{{{-->
    <v-btn
      small
      color='primary'
      @click='showEditChannelDialog'
      class='text-capitalize mb-2 mbPaper px-1'
      >
      <v-icon
        x-small
        class='mr-2'
        >mdi-pencil</v-icon>
      edit channel
    </v-btn>
    <!--edit channel temporary}}}-->
      <!--table{{{-->
      <v-data-table
        color='red'
        :headers="headers"
        :items="organizations"
        :items-per-page="5"
        class="elevation-1 text-capitalize font-weight-thin text-xs-center text-xs-middle mbTable"
        style='background:rgba(255,255,255,0.1);backdrop-filter:blur(5px);border:1px solid #999'
        @page-count="pageCount = $event"
        hide-default-footer
        :page.sync="page"
        >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            color='primary'
            @click="showEditOrganizationDialog(item)"
            >
            mdi-pencil
          </v-icon>
            <v-icon
              small
              color='error'
              @click="showRemoveOrganizationDialog(item)"
              >
              mdi-delete
            </v-icon>
        </template>
    <!--<template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>-->
      </v-data-table>
        <v-pagination
          circle
          v-model="page"
          :length="pageCount"
          >
        </v-pagination>

      <!--table}}}-->
    <pre>
    <!--{{JSON.stringify(organizations,undefined,2)}}-->
    </pre>
    <!--dialogs{{{-->
    <v-dialog
      persistent
      :width=dialog.editChannel.width
      v-model='dialog.editChannel.model'
      >
      <mb-edit-channel-form
        :width=dialog.editChannel.width
        :item='dialog.editChannel.item'
        @onClose='onCloseEditChannelDialog'
        />
    </v-dialog>
    <v-dialog
      persistent
      :width=dialog.editOrganization.width
      v-model='dialog.editOrganization.model'
      >
      <mb-edit-organization-form
        :width=dialog.editOrganization.width
        :item='dialog.editOrganization.item'
        @onClose='onCloseEditOrganizationDialog'
        />
    </v-dialog>
      <!--dialogs}}}-->
  </v-container>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'organizations',
  created(){//{{{
  },//}}}
  components:{//{{{
    mbEditChannelForm:require('../form/editChannel').default,
    mbEditOrganizationForm:require('../form/editOrganization').default,
  },//}}}
  computed:{//{{{
    user(){//{{{
      return this.$mb.get(this.appNS.getter.USER);
    },//}}}
    organizations(){//{{{
      return this.$mb.get(this.appNS.getter.ORGANIZATIONS);
    },//}}}
  },//}}}
  data:()=>{//{{{
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      loader:false,
      dialog:{
        editChannel:{
          width:600,
          model:false,
          item:null
        },
        editOrganization:{
          width:600,
          model:false,
          item:null
        }
      },

      headers:[//{{{
        {
        text:'name',
        align:'center',
        sortable:true,
        value:'basename',
      },{
        text:'short name',
        align:'center',
        sortable:true,
        value:'shortname',
      },{
        text:'Inserted At',
        align:'center',
        sortable:true,
        value:'inserted_at',
      },{
        text:'Updated At',
        align:'center',
        sortable:true,
        value:'updated_at',
      },/*{
        text:'Hash ID',
        align:'center',
        sortable:true,
        value:'hash_id',
      },{
        text:'Banner Path',
        align:'center',
        sortable:true,
        value:'banner_path',
      },{
        text:'Small Thumbnail Path',
        align:'center',
        sortable:true,
        value:'small_thumbnail_path',
      },{
        text:'Medium Thumbnail Path',
        align:'center',
        sortable:true,
        value:'med_thumbnail_path',
      },{
        text:'Large Thumbnail Path',
        align:'center',
        sortable:true,
        value:'large_thumbnail_path',
      },*/{
        text:'Actions',
        align:'center',
        sortable:true,
        value:'actions',
      }],//}}}
      items:[],
      editedItem:null
    }
  },//}}}
  methods:{//{{{
    async addOrganization(){//{{{
      try{
        this.loader=true;
        let res=await this.$mb.callAPIAuth(this.appNS.url.ORGANIZATION_ADD,{
          basename:"no-name111",
          shortname:"default111"
        })
        console.log(res)
        
        /*this.$mb
          .set(this.appNS.mutation.ORGANIZATION_ADD,{
            organization,
          })*/
      }catch(err){
        console.log(err) 
      }
      this.onCreate();
    },//}}}

    onCreate(){//{{{
      this.loader=false;
    },//}}}
    showEditOrganizationDialog(item){//{{{
      console.log('show edit organization dialog',item)
    },//}}}
    showRemoveOrganizationDialog(item){//{{{
      console.log('show remove organization dialog',item)
    },//}}}

    showEditChannelDialog(event,item){//{{{
      //console.log('show edit channel dialog',item)
      this.dialog.editChannel.item=item;
      this.dialog.editChannel.model=true;
    },//}}}
    onCloseEditChannelDialog(){//{{{
      this.dialog.editChannel.item=null;
      this.dialog.editChannel.model=false;
    },//}}}

    showEditOrganizationDialog(item){//{{{
      this.dialog.editOrganization.item=item;
      this.dialog.editOrganization.model=true;
    },//}}}
    onCloseEditOrganizationDialog(){//{{{
      this.dialog.editOrganization.item=null;
      this.dialog.editOrganization.model=false;
    },//}}}

  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
.mbTable .theme--light.v-table { background: #00f; }
</style>
<!--style}}}-->
