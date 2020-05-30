import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    state:{
        user: {
            isAuthenticated: false,
            userId: null,
            userEmail: null,
        }
    },
    mutations:{
        SetUser(state, payload){
            state.user.isAuthenticated = true,
            state.user.userId = payload
        },
        UnSetUser(state){
            state.user.isAuthenticated = false,
            state.user.userId = null
        },
        
        SetEmail(state, payload){
            state.user.userEmail = payload
        }
    },
    actions:{
        signup({commit},payload){
            if(payload.confirmPassword == payload.password){
            commit("set_processing", true)
            commit("clean_error")
            firebase.auth().createUserWithEmailAndPassword(payload.login, payload.password)
            .then(() => {
                commit("set_processing", false)
            })
            .catch(function(error) {
                commit("set_processing", false)
                commit("set_error", error.message)
              });
        }else{
            commit("set_error", "Пароли не совпадают!")
        }
        },
        signin({commit},payload){
            commit("set_processing", true)
            commit("clean_error")
            firebase.auth().signInWithEmailAndPassword(payload.login, payload.password)
            .then(() => {
                commit("set_processing", false)
            })
            .catch(function(error) {
                commit("set_processing", false)
                commit("set_error", error.message)
              });
        },
        stateChange({commit},payload){
            if(payload){
                commit("SetUser",payload.utd)
                commit("SetEmail",payload.email)
            }
            else
                commit("UnSetUser")
            
        },
        SignOut1(){
            firebase.auth().signOut()
            location.href ="/"
        }
    },
    getters:{
        isUserAuthenticated:(state) => state.user.isAuthenticated,
        isUserEmail:(state) => state.user.userEmail,
    }
}
