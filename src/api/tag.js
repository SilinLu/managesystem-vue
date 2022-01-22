import axios from "../utils/request";
export const getTagList=(data)=>
    axios({url:'/api/tag/getTagList',method:'get',data:data})
export const deleteTag=(data)=>
    axios({url:'/api/tag/deleteTag',method:'delete',data:data})
export const addTag=(data)=>
    axios({url:'/api/tag/addTag',method:'post',data:data})
