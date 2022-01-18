import axios from "../utils/request";
export const login=(data)=>
    axios({url:'/api/user/login',method:'post',data:data})
