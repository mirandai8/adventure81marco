import Vue from "vue";
import Router from "vue-router";

import homePage from "../pages/home";
import servicePage from "../pages/services";
import casePage from "../pages/case";
import casesPage from "../pages/cases";
import aboutPage from "../pages/about";
import contactPage from "../pages/contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: homePage,
    },
    {
      path: "/tjanster",
      name: "Service",
      component: servicePage,
    },
    {
      path: "/tjanster/:sn",
      name: "Service",
      component: servicePage,
    },
    {
      path: "/cases",
      name: "Cases",
      component: casesPage,
    },
    {
      path: "/cases/:sn",
      name: "Cases",
      component: casePage,
    },
    {
      path: "/omoss",
      name: "About",
      component: aboutPage,
    },
    {
      path: "/kontaktaoss",
      name: "Contact",
      component: contactPage,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to) {
    let offset = 0;
    if (to.hash) {
      return setTimeout(() => {
        if (window.innerWidth > 640) {
          offset = -130;
        }
        window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + (offset + -20),
          behavior: "smooth",
        });
      }, 10);
    }
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});
