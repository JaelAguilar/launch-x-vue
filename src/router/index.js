import { createRouter, createWebHashHistory } from "vue-router"
import ClienteView from "../views/ClienteView.vue"
import PasteleroView from "../views/PasteleroView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: ClienteView,
  },
  {
    path: "/user",
    name: "user",
    component: PasteleroView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
