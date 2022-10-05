import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap"
import "./assets/custom.scss";
Vue.config.productionTip = false
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
