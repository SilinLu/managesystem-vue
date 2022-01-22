import axios from "../utils/request";
export const addGoods=(data)=>
    axios({url:'/api/good/addGoods',method:'post',data:data})
