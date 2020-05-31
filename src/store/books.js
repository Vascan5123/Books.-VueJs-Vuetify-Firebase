import Vue from 'vue'

export default {
    state: {
        booksInfo:[],

    },
    mutations: {
        SetBooks(state,payload){
            state.booksInfo = payload
        }
    },
    actions: {
        LoadBooks({commit}){
            Vue.$db.collection('books')
            .get()
            .then((querySnapshot) => {
                 let books = [] 
                querySnapshot.forEach(s => {
                     const data = s.data()
                    let book = {
                        id: s.id,
                        name: data.name,
                        description: data.description,
                        text: data.text,
                        url: data.url,
                        author: data.author,
                        rating: data.rating,
                    }
                    books.push(book)                     
                })
                commit('SetBooks', books)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        GetBooks: (state) => state.booksInfo,
    }
}
