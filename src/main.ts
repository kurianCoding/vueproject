import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter,{ RouteConfig } from 'vue-router'
import loginBox from './components/Login.vue'
import CreatePage from './components/CreatePage.vue'
Vue.config.productionTip = false

const routes: Array<RouteConfig> = [
    {
	path:'/login',
	name:'login',
	component: loginBox
    },
    {
	path:'/create',
	name:'create',
	component: CreatePage
    }
];
const router = new VueRouter({ 
    routes});
Vue.use(VueRouter);
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
