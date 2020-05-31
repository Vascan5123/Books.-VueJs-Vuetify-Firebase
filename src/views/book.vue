<template>
  <div id="book">
    <v-container class="mt-5">
      <v-layout>
        <v-flex>
          <v-card class="py-5 cardTop">
            <v-row>
                <v-img contain :src="findBook.url" class="imageBook"></v-img>
              <v-col cols="7" sm="8" md="10">
                <v-card-title class="mb-5" style="word-break: break-word;">{{findBook.name}}</v-card-title>
                <v-card-subtitle class="description" style="word-break: break-word;">{{findBook.description}}</v-card-subtitle>
                <v-card-subtitle style="word-break: break-word;">Автор: {{findBook.author}}</v-card-subtitle>
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

<style>
.imageBook {
  flex-basis: 125px;
}
.cardTop {
  background-image: url("../assets/book.jpg");
  background-repeat: repeat;
  background-size: contain;
}
.description{
  max-height: 500px;
  min-height: 250px;
}
</style>