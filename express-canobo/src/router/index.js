import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TableView from '../views/TableView.vue'
import Loading from '../views/Loading.vue'
import ChartView from '../views/ChartView.vue'
import DotPlot from '../views/DotPlot.vue'
import BarPlot from '../views/BarPlot.vue'
import HeatMap from '../views/HeatMap.vue'
import DensityPlot from '../views/DensityPlot.vue'
import FinalResults from '../views/FinalResults.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};
Vue.use(VueRouter)
Vue.use(Toast, options);
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView
  },
  {
    path: '/dot-plot',
    name: 'DotPlot',
    component: DotPlot
  },
  {
    path: '/heat-map',
    name: 'HeatMap',
    component: HeatMap
  },
  {
    path: '/bar-plot',
    name: 'barPlot',
    component: BarPlot
  },
  {
    path: '/density-plot',
    name: 'DensityPlot',
    component: DensityPlot

  },
  {
    path: '/final-results',
    name: 'finalResults ',
    component: FinalResults

  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})

export default router
