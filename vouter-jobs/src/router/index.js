import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/job/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true, // allows to accept any route parameters as props
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // catchall 404
  {
    path: '/:catchAll(.*)', // catch all unregistered routes
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
