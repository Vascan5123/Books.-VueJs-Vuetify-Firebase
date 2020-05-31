export default {
    state: {
        booksInfo:
            [
                {
                    id: 1,
                    name: "Приключения Тома Сойера",
                    description: " О приключениях сорванца и проказника Тома Сойера с удовольствием читают дети во всем мире. Только он может превратить работу в игру, сводить бородавки при помощи дохлой кошки, прогулять школу и все равно выйти сухим из воды",
                    url: "https://s1.livelib.ru/boocover/1002811591/200/8236/Mark_Tven__Priklyucheniya_Toma_Sojera.jpg",
                    author: "Марк Твен",
                    rating: 4,
                },
                {
                    id: 2,
                    name: "Война и Мир",
                    description: "Война и мир Л. Н. Толстого справедливо считается величайшим эпическим произведением не только русской, но и всей европейской литературы нового времени Иллюстрации к этому уникальному изданию были выполнены талантливыми художниками Александром Петровичем Апситом и Николаем Николаевичем Каразиным",
                    url: "https://img4.labirint.ru/rc/1836c2050a9cbc0ca78f1fe6c461e019/220x340/books66/650484/cover.jpg?1564120687",
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