import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _facbe65c = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Banner.vue' /* webpackChunkName: "pages_components_Banner" */))
const _14c473c1 = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Footer.vue' /* webpackChunkName: "pages_components_Footer" */))
const _35f6d7b3 = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Header.vue' /* webpackChunkName: "pages_components_Header" */))
const _7f378012 = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Section1.vue' /* webpackChunkName: "pages_components_Section1" */))
const _7f459793 = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Section2.vue' /* webpackChunkName: "pages_components_Section2" */))
const _7f53af14 = () => interopDefault(import('..\\resources\\nuxt\\pages\\components\\Section3.vue' /* webpackChunkName: "pages_components_Section3" */))
const _0788dc12 = () => interopDefault(import('..\\resources\\nuxt\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/components/Banner",
    component: _facbe65c,
    name: "components-Banner"
  }, {
    path: "/components/Footer",
    component: _14c473c1,
    name: "components-Footer"
  }, {
    path: "/components/Header",
    component: _35f6d7b3,
    name: "components-Header"
  }, {
    path: "/components/Section1",
    component: _7f378012,
    name: "components-Section1"
  }, {
    path: "/components/Section2",
    component: _7f459793,
    name: "components-Section2"
  }, {
    path: "/components/Section3",
    component: _7f53af14,
    name: "components-Section3"
  }, {
    path: "/",
    component: _0788dc12,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
