export default {
    state:{
        booksInfo:
        [
            {
            id: 1,
            name: "Приключение Тома Соера",
            description: " О приключениях сорванца и проказника Тома Сойера с удовольствием читают дети во всем мире. Только он может превратить работу в игру, сводить бородавки при помощи дохлой кошки, прогулять школу и все равно выйти сухим из воды",
            rating: 4,
            },
            {
            id: 2,
            name: "name2",
            description: "discription2",
            rating: 5,
            },
            {
            id: 3,
            name: "name1",
            description: "discription1",
            rating: 4,
            },
            {
            id: 4,
            name: "name2",
            description: "discription2",
            rating: 5,
            },
            {
            id: 5,
            name: "name1",
            description: "discription1",
            rating: 4,
            },
            {
            id: 6,
            name: "name2",
            description: "discription2",
            rating: 5,
            },
            {
            id: 7,
            name: "name1",
            description: "discription1",
            rating: 4,
            },
            {
            id: 8,
            name: "name2",
            description: "discription2",
            rating: 5,
            }
        ]
    },
    mutations:{

    },
    actions:{
        
    },
    getters:{
        GetBooks: (state) => state.booksInfo,
    }
}