import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/style.scss'
import router from './router.js'
import store from './store.js'
import firebaseConfig from './config/firebase.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore"


const vuetifyOptions = {}
Vue.use(Vuetify)
Vue.config.productionTip = false


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()


Vue.$db = db

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions),
  router,
  store,
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      vm.$store.dispatch("stateChange", user)
    })
    this.$store.dispatch("LoadBooks")
  }
}).$mount('#app')
