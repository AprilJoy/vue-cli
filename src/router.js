import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent
  }
];

export default new Router({
  mode: "history",
  routes: routes
});
