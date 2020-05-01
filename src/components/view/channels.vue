<!--template{{{-->
<template>
  <v-container
    fluid
    >
    <!--<v-btn
      small
      color='primary'
      @click='showAddChannelDialog'
      class='text-capitalize mb-2'
      >
      <v-icon
        x-small
        class='mr-2'
        >mdi-pencil</v-icon>
      add
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        color='primary'
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        color='error'
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
      </v-data-table>-->

    channels
  </v-container>
</template>
<!--template}}}-->
<!--script{{{-->
<script>
export default {
  name: 'channels',
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
      headers:[{//{{{
        text:'Ordinal',
        align:'start',
        sortable:true,
        value:'ordinal',
      },{
        text:'Updated At',
        align:'start',
        sortable:true,
        value:'updatedAt',
      },{
        text:'Hash ID',
        align:'start',
        sortable:true,
        value:'hashID',
      },{
        text:'Banner Path',
        align:'start',
        sortable:true,
        value:'bannerPath',
      },{
        text:'Small Thumbnail Path',
        align:'start',
        sortable:true,
        value:'sThumbnail',
      },{
        text:'Medium Thumbnail Path',
        align:'start',
        sortable:true,
        value:'mThumbnail',
      },{
        text:'Large Thumbnail Path',
        align:'start',
        sortable:true,
        value:'lThumbnail',
      },{
        text:'Actions',
        align:'start',
        sortable:true,
        value:'actions',
      }],//}}}
      items:[{
        ordinal:0,
        updatedAt:'2019-12-20 19:17',
        baseName:'Old Testament',
        hashID:'xJBx',
        bannerPath:'',
        sThumbnail:'',
        mThumbnail:'',
        lThumbnail:'',
      }],
      editedItem:null
    }
  },//}}}
  methods:{//{{{
    showAddChannelDialog(){//{{{
    },//}}}
    showEditChannelDialog(){//{{{
    },//}}}
  },//}}}
};
</script>
<!--script}}}-->
<!--style{{{-->
<style>
</style>
<!--style}}}-->
