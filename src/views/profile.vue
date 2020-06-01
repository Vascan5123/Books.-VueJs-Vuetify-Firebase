<template>
  <div id="profile">
    <v-dialog v-model="dialogFoto" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Изменить фотографию</v-card-title>

        <v-col>
<!--           <v-file-input label="Выберите фотографию" v-model="foto"></v-file-input> -->
          <v-text-field label="Введите URL фотографии" v-model="foto"></v-text-field>
        </v-col>
        <v-divider></v-divider>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" outlined @click="dialogFoto = false">Отмена</v-btn>
          <v-btn color="primary" @click="fotoF">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-container>
      <v-layout>
        <v-flex>
          <v-row justify="center">
            <v-col cols="12" sm="10" md="12" lg="10">
              <v-card class="py-5 cardTop" elevation="12">
                <v-row>
                  <v-img :src="filterImage" class="imageBook">
                    <v-row @click="dialogFoto = true" class="text-center subImage">
                      <v-col align-self="center" cols="12">Изменить фотографию</v-col>
                    </v-row>
                  </v-img>
                  <v-col align-self="end" class="py-0">
                    <v-row justify="end">
                      <v-card-title class="display-1 textNameTop py-0 mr-5">{{isUserName}}</v-card-title>
                    </v-row>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      photo: "./../static/photo.png",
      dialogFoto: false,
      foto: null,
    };
  },
  computed: {
    ...mapGetters(["isUserName", "isUserEmail", "isUserImage"]),
    filterImage(){
       if(this.isUserImage != null){
         return this.isUserImage
       }else{
         return this.photo
       }
    }
    
  },
  methods: {
    fotoF(){
      this.$store.dispatch('SetImageAction', this.foto)
      this.dialogFoto = false
    }
  }
};
</script>

<style scoped>
.cardTop {
  background: url("https://i.pinimg.com/originals/da/39/55/da395516cd2681b6e64bdcb1894ac3d8.jpg");
  background-size: cover;
  background-position: center;
}
.imageBook {
  flex-basis: 125px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  border-radius: 5px;

}
.textNameTop {
  color: white;
  text-shadow: 1px 2px 4px black;
  word-break: break-word;
}
.subImage {
  color: white;
  height: 100%;
  opacity: 0;
  transition: 0.3s;
  user-select: none;
}
.subImage:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
@media (min-width: 176px) {
  .imageBook {
    max-height: 150px;
    max-width: 150px;
  }
}
@media (min-width: 1024px) {
  .imageBook {
    max-height: 300px;
    max-width: 350px;
  }
}
</style>