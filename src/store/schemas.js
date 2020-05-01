import {schema} from 'normalizr';
let opts={
  idAttribute:'uuid'//_id
}
//core{{{
export const MediaItem=new schema.Entity('mediaitems',{
},opts);
export const Playlist=new schema.Entity('playlists',{
  mediaItems:[MediaItem]
},opts);
export const Channel=new schema.Entity('channels',{
  playlists:[Playlist]
},opts);
export const Organization=new schema.Entity('organizations',{
  channels:[Channel]
},opts);
export const User=new schema.Entity('users',{
  orgs:[Organization]
},opts);
//core}}}
