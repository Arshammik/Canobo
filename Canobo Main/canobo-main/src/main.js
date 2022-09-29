import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap"


export const app = createApp(App)
app.AOS = new AOS.init({ disable: "mobile" });
app.use(router)
app.use(AOS).mount('#app')
