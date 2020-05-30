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



const vuetifyOptions = { }
Vue.use(Vuetify)
Vue.config.productionTip = false


firebase.initializeApp(firebaseConfig);





new Vue({
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions),
  router,
  store,
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch("stateChange",user)
    })
  }
}).$mount('#app')
