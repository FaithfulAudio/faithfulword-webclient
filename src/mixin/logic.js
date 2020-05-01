export default {
  data () {//{{{
  },//}}}
  created(){//{{{
  },//}}}
  methods: {
    //channel{{{
    async addChannel({uuid}){//{{{
      await this.$mb.callAPIAuth(this.appNS.url.CHANNEL_ADD,{
        org_uuid:uuid,
        ordinal:1,
        basename:'test_channel_'+Math.random(),
      })
      //this.$mb.callAPIAuth({});
    },//}}}
    async delChannel({uuid}){//{{{
    },//}}}
    async updateChannel({uuid}){//{{{
    },//}}}
    //channel}}}
    //organization{{{
    async addOrganization({uuid}){//{{{
    },//}}}
    async delOrganization({uuid}){//{{{
    },//}}}
    async updateOrganization({uuid}){//{{{
    },//}}}
    //organization}}}
    //playlist{{{
    async addPlaylist({uuid}){//{{{
    },//}}}
    async delPlaylist({uuid}){//{{{
    },//}}}
    async updatePlaylist({uuid}){//{{{
    },//}}}
    async playPlaylist({uuid}){//{{{
    },//}}}
    //playlist}}}
    //playlist item{{{
    async addPlaylistItem({uuid}){//{{{
    },//}}}
    async delPlaylistItem({uuid}){//{{{
    },//}}}
    async updatePlaylistItem({uuid}){//{{{
    },//}}}
    async playSinglePlaylistItem({uuid}){//{{{
    },//}}}
    async pauseSinglePlaylistItem({uuid}){//{{{
    },//}}}
    //playlist item}}}
    //channel member{{{
    async inviteOrganizationMember({uuid}){//{{{
    },//}}}
    async delOrganizationMember({uuid}){//{{{
    },//}}}
    async inviteChannelMember({uuid}){//{{{
    },//}}}
    async updateChannelMember({uuid}){//{{{
    },//}}}
    //channel member}}}
    //organization{{{
    async delOrganizationMember({uuid}){//{{{
    },//}}}
    async updateOrganizationMember({uuid}){//{{{
    },//}}}
    //organization}}}
    //chat message{{{
    async sendMessage({channelID,text},loader){//{{{
      //loader=true;
      let res=await this.$mb.callAPIAuth(this.appNS.url.SEND_MESSAGE,{
        channel_uuid:channelID,
        text
      })
      //wkleic text do conversacji ale razem z loaderem
      //ktory bedzie czekal na potwierdzenie
      //loader=false;
    },//}}}
    async updateMessage({uuid}){//{{{
    },//}}}
    //chat message}}}
    //user{{{
    async updateUser({uuid}){//{{{
    },//}}}
    async logInUser({uuid}){//{{{
    },//}}}
    async logOutUser({uuid}){//{{{
    },//}}}
    async registerUser({uuid}){//{{{
    },//}}}
    //user}}}
    //notification{{{
    async sendPrivateMessage({uuid}){//{{{
    },//}}}
    async loadNotifications({uuid}){//{{{
    },//}}}

    //every invitation needs own response?

    //notification}}}
    //comment{{{
    async addComment({uuid}){//{{{
    },//}}}
    async updateComment({uuid}){//{{{
    },//}}}
    async delComment({uuid}){//{{{
    },//}}}
    //comment}}}
  }
}
