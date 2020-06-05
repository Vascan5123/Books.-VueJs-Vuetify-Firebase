<template>
  <div id="content1">
    <v-content>
      <v-parallax
        :height="HeightParallax"
        src="https://img5.goodfon.ru/original/2560x1600/c/35/books-glasses-table-library.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center mb-5" cols="12" tag="h1">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black titleTop"
                >Reading Books</span>
              </v-col>

              <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#blog')">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-parallax>

      <section id="blog" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Наши преимущества</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
              <v-card class="py-12 px-4" color="grey lighten-5" flat :height="cardHeight">
                <v-theme-provider dark>
                  <div>
                    <v-avatar color="primary" size="88">
                      <v-icon large v-text="icon"></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text class="subtitle-1" v-text="text"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
          <v-container fill-height>
            <v-row class="mx-auto" justify="center">
              <v-col v-for="[value, title] of stats" :key="title" cols="12" md="4">
                <div class="text-center">
                  <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                  <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section id="news">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Новинки</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row justify="center">
            <v-col cols="12" md="4" class="booksNews">
              <v-img :src="books[0].url" class="mb-4" height="275" max-width="30%"></v-img>

              <h3 class="font-weight-black mb-4 text-uppercase" v-text="books[0].name"></h3>

              <div
                class="title font-weight-light mb-5"
              >{{books[0].description.substr(0,80) + "..."}}</div>

              <v-btn class="ml-n4 font-weight-black" text>Подробнее</v-btn>
            </v-col>
            <v-col cols="12" md="4" class="booksNews">
              <v-img :src="books[1].url" class="mb-4" height="275" max-width="30%"></v-img>

              <h3 class="font-weight-black mb-4 text-uppercase" v-text="books[1].name"></h3>

              <div
                class="title font-weight-light mb-5"
              >{{books[1].description.substr(0,80) + "..."}}</div>

              <v-btn class="ml-n4 font-weight-black" text>Подробнее</v-btn>
            </v-col>
            <v-col cols="12" md="4" class="booksNews">
              <v-img :src="books[2].url" class="mb-4" height="275" max-width="30%"></v-img>

              <h3 class="font-weight-black mb-4 text-uppercase" v-text="books[2].name"></h3>

              <div
                class="title font-weight-light mb-5"
              >{{books[2].description.substr(0,80) + "..."}}</div>

              <v-btn class="ml-n4 font-weight-black" text>Подробнее</v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>
    </v-content>
  </div>
</template>


<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "library_books",
          title: "Новые книги каждый день",
          text:
            "Мы стараемся каждый день вылаживать новые книги, чтобы вы всегда могли найти что-то новое среди первых. Вы можете следить за новинками в отделе новостей."
        },
        {
          icon: "euro_symbol",
          title: "Абсолютно бесплатно",
          text:
            "Читайте книги абсолютно бесплатно. Читайте онлайн или скачивайте книги бесплатно."
        },
        {
          icon: "mdi-shield-outline",
          title: "Без рекламы и вирусов",
          text:
            "Наш сервис без рекламы и сторонних ПО. Никаких вирусов при скачивании. Читайте книги без угрозы для своего устройства."
        }
      ],
      stats: [
        ["1000+", "книг"],
        ["500к", "скачиваний"],
        ["10000+", "Пользователей"]
      ]
    };
  },
  computed: {
    HeightParallax() {
      return window.innerHeight;
    },
    cardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "auto";
        case "sm":
          return "auto";
        case "md":
          return "450px";
        case "lg":
          return "400px";
        default:
          return "350px";
      }
    },
    books() {
      return this.$store.getters.GetBooks;
    }
  }
};
</script>

<style scoped>
.titleTop {
  text-shadow: 3px 2px 5px black;
}
.booksNews:hover {
  background: #f0f0f0;
}
</style>