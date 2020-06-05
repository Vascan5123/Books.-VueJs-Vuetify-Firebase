import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './store/user.js'
import GeneralModule from './store/general.js'
import BooksModule from './store/books.js'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        UserModule,
        GeneralModule,
        BooksModule,
    },
})