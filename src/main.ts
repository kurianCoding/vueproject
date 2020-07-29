import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import loginBox from './components/Login.vue'
Vue.config.productionTip = false

const router = new  VueRouter ({
    routes:  [
    {path:'/login',component:loginBox},
]
});
Vue.use(VueRouter);
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
