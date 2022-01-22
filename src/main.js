import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
//设置axios为form-data

// 安装路由
Vue.use(VueRouter);
// 安装 ElementUI
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  if(to.path=='/login'|to.path=='/'|window.sessionStorage.getItem("token")!=null){
    next();
  }else {
    next('/login');
  }
})
new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
});




