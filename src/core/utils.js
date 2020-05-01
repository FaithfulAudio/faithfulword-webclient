class Utils{//{{{
  timeout(time){//{{{
    return new Promise((resolve)=>{
      setTimeout(resolve,time)
    })
  }//}}}
  async asyncFunc(data,timeout){//{{{
    await this.timeout(timeout);
    return data;
  }//}}}
}//}}}
module.exports=new Utils();
