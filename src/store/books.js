export default {
    state: {
        booksInfo:
            [
                {
                    id: 1,
                    name: "Приключение Тома Соера",
                    url: 1,
                    description: " О приключениях сорванца и проказника Тома Сойера с удовольствием читают дети во всем мире. Только он может превратить работу в игру, сводить бородавки при помощи дохлой кошки, прогулять школу и все равно выйти сухим из воды",
                    
                    author: "Марк Твен",
                    rating: 4,
                },
                {
                    id: 2,
                    name: "Война и Мир",
                    description: "discription2",
                    url: "https://api.polka.academy/storage/post/bookmate/25/picture-e71d90bbfb4897ff821ee70ed29e3bfc.jpg",
                    author: "Лев Толстой",
                    rating: 5,
                },
                {
                    id: 3,
                    name: "name1",
                    description: "discription1",
                    url: "https://api.polka.academy/storage/post/bookmate/25/picture-e71d90bbfb4897ff821ee70ed29e3bfc.jpg",
                    author: "Лев Толстой",
                    rating: 4,
                },
                {
                    id: 4,
                    name: "name2",
                    description: "discription2",
                    url: "https://api.polka.academy/storage/post/bookmate/25/picture-e71d90bbfb4897ff821ee70ed29e3bfc.jpg",
                    author: "Лев Толстой",
                    rating: 5,
                },
                {
                    id: 5,
                    name: "name1",
                    description: "discription1",
                    url: "https://api.polka.academy/storage/post/bookmate/25/picture-e71d90bbfb4897ff821ee70ed29e3bfc.jpg",
                    author: "Лев Толстой",
                    rating: 4,
                }
            ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        GetBooks: (state) => state.booksInfo,
    }
}