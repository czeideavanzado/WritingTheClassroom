"use strict";

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Speakers from "../views/Speakers";
import Schedule from "../views/Schedule";
import Organizers from "../views/Organizers";
import Repository from "../views/Repository";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Speakers",
    component: Speakers
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/organizers",
    name: "Organizers",
    component: Organizers
  },
  {
    path: "/repository",
    name: "Repository",
    component: Repository
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
