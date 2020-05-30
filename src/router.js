import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store.js'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/primary_page.vue').default },
    { path: '/news', name: 'news', component: require('./components/news.vue').default },
    { path: '/books', name: 'books', component: require('./views/books.vue').default },
    { path: '/profile', name: 'profile', component: require('./views/profile.vue').default, beforeEnter: AuthGuard },
    { path: '/SignIn', name: 'signin', component: require('./views/SignIn.vue').default },
    { path: '/SignUp', name: 'signup', component: require('./views/SignUp.vue').default },
    { path: '/book/:id', name: 'book', props: true, component: require('./views/book.vue').default },

    //{path: '/book/books', redirect: '/book', name: 'book1', component: require('./views/books.vue').default},

  ]
})

function AuthGuard(from, to, next) {
  if (Store.getters.isUserAuthenticated)
    next()
  else
    next("/signin")
}