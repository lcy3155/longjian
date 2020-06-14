import axios from "axios";
import qs from "qs";
import router from "../router";
import weui from 'weui.js'
export const CONFIG = {
  //  url :    'http://test.supomuye.com:8080' // 线上水晶测试
//    url:'http://qiye.aldmfj.com:8081', // 生产环境back
//    url:'http://6868.hm378.cn:8081', // 生产环境hm387
    //  url:'http://6868.supomuye.com:8081', // 生产环境supomuye
  //  url:'http://6868.y517g2.cn:8081', // 生产环境supomuye
    // // url : 'http://6868.haozheok.com:8098'  // 备用环境 http://qiye.haozheok.com:8098
    //  url:  'http://47.95.213.148:8080' //
      url :  'http://39.97.232.123:8081',  //水晶测试 test数据库 
  //  url:'http://127.0.0.1:8081',// 本地环境
     //url: window.g.BASE_URL, //打包后引用的
     ver:'test0' 
 }
const Axios = axios.create({
    timeout: 10000,
});
//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
    // 在发送请求之前做某件事
    let cururl = config.url;
    let configNew = config;
    configNew.url = CONFIG.url+config.url;
     if(cururl != '/login/user' && cururl !='/login/save' && cururl !='/msg/send'){
        configNew.url = config.url+'?mobile='+localStorage.mobile;
     }
    // 若是有做鉴权token , 就给头部带上token
    if (localStorage.token) {
        configNew.headers['token'] = localStorage.token;
    }
    return configNew;
},
error => {
    return Promise.reject(error.data.msg);
}
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        if(res.data.code!=200){
          //weui.topTips(res.data.msg,1000)
        }
        if (res.data.code == 523) {
            router.push({
                path: "/login"
            });
        }
      return res;
},
error => {
   console.log(error+'错误')
//    weui.topTips('网络错误，请重试',1000)
}
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
    install: function(Vue, Option) {
        Object.defineProperty(Vue.prototype, "$axios", { value: Axios });
    }
};
