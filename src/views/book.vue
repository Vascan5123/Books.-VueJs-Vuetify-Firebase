<template>
  <div id="book">
    <v-container class="mt-5">
      <v-layout>
        <v-flex>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-card class="py-5 cardTop">
                <v-row>
                  <v-img contain :src="findBook.url" class="imageBook"></v-img>
                  <v-col cols="12" sm="8" md="10">
                    <v-card-title
                      class="mb-5 display-1"
                      style="word-break: break-word;"
                    >{{findBook.name}}</v-card-title>
                    <v-card-subtitle
                      class="description subtitle-1"
                      style="word-break: break-word;"
                    >{{findBook.description}}</v-card-subtitle>
                    <v-row class="pa-4">
                    <v-card-subtitle style="word-break: break-word;">Автор: {{findBook.author}}</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-card-actions class="mr-5">
                      <v-btn class="primary">Читать</v-btn>
                      <v-btn class="primary">Скачать</v-btn>
                    </v-card-actions>
                    </v-row>
                    <v-divider></v-divider>
                    <v-rating
                      readonly
                      align="center"
                      v-model="findBook.rating"
                      color="blue accent-1"
                      dense
                      half-increments
                      size="25"
                    ></v-rating>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-card class="py-5 cardCenter">
                <v-row justify="center">
                  <v-col align="center">
                  <v-card-text class="headline my-5">Краткое содержание</v-card-text>
                  <v-card-text class="textCardCenter title" v-html="findBook.text"></v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    findBook() {
      return this.$store.getters.GetBooks.find(b => b.id == this.id);
    }
  },
  methods: {}
};
</script>

<style scoped>
.imageBook {
  flex-basis: 125px;
  max-width: 33%;
}
.cardTop {
  background-image: url("../assets/book.jpg");
  background-repeat: repeat;
  background-size: contain;
}
.description {
  max-height: 500px;
  min-height: 250px;
}
.cardCenter{
  background-image: url("../assets/list.png");
  background-size: contain;
  background-repeat: repeat;
}
.textCardCenter{
  word-break: break-word;
  padding-left: 7%;
  padding-right: 7%;
}
</style>