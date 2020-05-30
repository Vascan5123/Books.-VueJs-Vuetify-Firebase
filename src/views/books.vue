<template>
  <div id="books">
    <!--Верхнее изображение-->
    <v-card>
      <v-row>
        <v-img :src="require('../assets/booksFon.jpg')"></v-img>
        <span class="titleBooks display-2">Books List</span>
        <v-flex class="btnBooks">
          <v-btn @click="searchClick" href="#" text>
            <v-icon class="white--text" large>search</v-icon>
          </v-btn>
          <v-btn href="#booksList" class="hidden-xs-only" text>
            <v-icon class="white--text" x-large>expand_more</v-icon>
          </v-btn>
        </v-flex>
      </v-row>
    </v-card>
    <!--Поиск-->
    <v-expand-transition mode="in-out">
      <v-container v-show="search">
        <v-layout>
          <v-row justify="center">
            <v-flex class="md6 xs10 center mt-5" transition="scroll-y-transition">
              <v-text-field label="Поиск книги по названию" solo v-model="searchText"></v-text-field>
            </v-flex>
          </v-row>
        </v-layout>
      </v-container>
    </v-expand-transition>

    <!--Список книг-->
    <v-container grid-list-md id="booksList">
      <v-row justify="center">
        <v-col
          class="mx-sm-4 mx-md-0 mx-lg-5 blockBook"
          cols="11"
          sm="5"
          md="4"
          lg="3"
          v-for="book in searchFilter"
          :key="book.id"
        >
          <v-hover>
            <template v-slot="{ hover }">
              <router-link :to="'book/' + book.id">
                <v-card
                  class="cardsBooks blockBook"
                  :elevation="hover ? 15 : 4"
                  @click="toolbarisTransparent(false)"
                >
                  <v-row>
                    <v-img
                      src="https://s1-goods.ozstatic.by/1000/850/714/10/10714850_0.jpg"
                      style="flex-basis: 125px"
                      class="my-3"
                      max-width="32%"
                      contain
                    ></v-img>

                    <v-col cols="8">
                      <v-card-title
                        :title="book.name"
                        class="nameBook"
                      >{{ book.name.length > 25 ? book.name.substr(0,25) + "..." : book.name.substr(0,25) }}</v-card-title>
                      <v-card-text
                        :title="book.description"
                        class="descriptionBook"
                      >{{ book.description.length > 100 ? book.description.substr(0,100) + "..." : book.description.substr(0,100) }}</v-card-text>
                      <v-divider></v-divider>
                      <v-rating
                        class="center"
                        align="center"
                        v-model="book.rating"
                        color="blue accent-1"
                        dense
                        half-increments
                        size="18"
                      ></v-rating>
                    </v-col>
                  </v-row>
                </v-card>
              </router-link>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      search: false,
      searchText: null
    };
  },
  methods: {
    toolbarisTransparent(payload) {
      this.$store.dispatch("SetToolbarTransparent", payload);
    },
    searchClick() {
      this.search = !this.search;
    }
  },
  computed: {
    books() {
      return this.$store.getters.GetBooks;
    },
    searchFilter() {
      let books = this.books;
      if (this.searchText) {
        books = books.filter(
          b => b.name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0
        );
      }
      return books;
    }
  }
};
</script>

<style scoped>
.btnBooks {
  position: absolute;
  right: 1%;
  bottom: 1%;
  color: white !important;
  text-shadow: 1px 1px 2px black;
}
.titleBooks {
  position: absolute;
  left: 1%;
  bottom: 1%;
  color: white !important;
  text-shadow: 1px 1px 2px black;
}
.nameBook {
  word-break: break-word;
  height: 100px;
  overflow: hidden;
}
.descriptionBook {
  word-break: break-all;
  height: 100px;
  overflow: hidden;
}
.cardsBooks {
  background: url("../assets/book.jpg");
  background-size: cover;
}

.search-fade-enter-active {
  transition: all 3.3s ease;
}
.search-fade-leave-active {
  transition: all 3.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.search-fade-enter,
.slide-fade-leave-to {
  transform: translateX(120px);
  opacity: 0;
}
</style>