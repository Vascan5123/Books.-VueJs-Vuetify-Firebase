import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage';
export default {
    state: {
        user: {
            isAuthenticated: false,
            userId: null,
            userEmail: null,
            name: null,
            image: null
        }
    },
    mutations: {
        SetUser(state, payload) {
            state.user.isAuthenticated = true,
                state.user.userId = payload
        },
        SetUserName(state, payload) {
            state.user.name = payload
        },
        UnSetUser(state) {
            state.user.isAuthenticated = false,
                state.user.userId = null
        },
        SetEmail(state, payload) {
            state.user.userEmail = payload
        },
        SetImage(state, payload) {
            state.user.image = payload
        }
    },
    actions: {
        signup({ commit }, payload) {
            if (payload.confirmPassword == payload.password) {
                commit("set_processing", true)
                commit("clean_error")
                firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then(() => {
                        firebase.auth().currentUser.updateProfile({ displayName: payload.name })
                            .then(() => {
                                commit('SetUserName', payload.name)
                            })
                        commit("set_processing", false)
                    })
                    .catch(function (error) {
                        commit("set_processing", false)
                        commit("set_error", error.message)
                    });
            } else {
                commit("set_error", "Пароли не совпадают!")
            }
        },
        signin({ commit }, payload) {
            commit("set_processing", true)
            commit("clean_error")
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit("set_processing", false)
                })
                .catch(function (error) {
                    commit("set_processing", false)
                    commit("set_error", error.message)
                });
        },
        stateChange({ commit }, payload) {
            if (payload) {
                commit("SetUser", payload.uid)
                commit("SetEmail", payload.email)
                commit("SetUserName", payload.displayName)
                commit("SetImage", payload.photoURL)
            }
            else
                commit("UnSetUser")

        },
        SignOut1() {
            firebase.auth().signOut()
            location.href = "/"
        },
        SetImageUrl({ commit }, payload) {
            firebase.auth().currentUser.updateProfile({ photoURL: payload })
                .then(() => {
                    commit("SetImage", payload)
                })
                .catch(function (error) {
                    commit("set_error", error.message)
                    console.log(error.message)
                })
        },
        SetImageStore({ state, commit }, payload) {
            var storageRef = firebase.storage().ref();
            storageRef.child("images_avatar/" + state.user.userId).put(payload)
            storageRef.child("images_avatar/" + state.user.userId).getDownloadURL()
            .then(function(url) {
                firebase.auth().currentUser.updateProfile({ photoURL: url })
                .then(() => {
                    commit("SetImage", url)
                    /* window.location.href = "/profile"; */
                })
                .catch(function (error) {
                    commit("set_error", error.message)
                    console.log(error.message)
                })
              })
        }
        
    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated,
        isUserEmail: (state) => state.user.userEmail,
        isUserName: (state) => state.user.name,
        isUserImage: (state) => state.user.image,
    }
}
