import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import NotFound from '../views/NotFound.vue'
import Research from '../views/Research.vue'
import Article1 from "../views/Article1.vue"
import Article2 from "../views/Article2.vue"
import Project from "../views/Project.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component:Team
    },
    {
      path: '/contacts',
      name: 'contacts',
      component:Contact
    },
    {
      path: '/services-and-tools',
      name: 'services',
      component:Services
    },
    {
      path: '/researches',
      name: 'research',
      component:Research
    },
    {
      path: '/researches/comparative-genome-wide-analysis',
      name: 'Article1',
      component:Article1
    },
    {
      path: '/researches/comparative-analysis-of-protein-protein',
      name: 'Article2',
      component:Article2
    },
    {
      path: '/researches/machine-learning-identifies',
      name: 'Project',
      component:Project
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:NotFound
    }
  ]
})

export default router
