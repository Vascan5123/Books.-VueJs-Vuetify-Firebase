<template>
  <div id="profile">
    <v-dialog v-model="dialogFoto" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Изменить фотографию</v-card-title>

        <v-col>
          <v-tabs class="primary" grow>
            <v-tab>Файл</v-tab>

            <v-tab>URL</v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-file-input
                    :disabled="fotoFileF"
                    label="Выберите фотографию"
                    v-model="fotoFile"
                  ></v-file-input>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-text-field
                    :disabled="fotoUrlF"
                    label="Введите URL фотографии"
                    v-model="fotoUrl"
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
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

    <v-container>
      <v-layout>
        <v-flex>
          <v-row justify="center">
            <v-col cols="12" sm="10" md="12" lg="10">
              <v-card>
                <v-toolbar flat color="primary" dark>
                  <v-toolbar-title>Мой профиль</v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                  <v-tab>
                    <v-icon left>mdi-account</v-icon><span class="hidden-xs-only">Мои данные</span>
                  </v-tab>
                  <v-tab>
                    <v-icon left>mdi-lock</v-icon><span class="hidden-xs-only">Изменить пароль</span>
                  </v-tab>
                  <v-tab>
                    <v-icon left>book</v-icon><span class="hidden-xs-only">Скачанные книги</span>
                  </v-tab>
                  
                  <v-tab-item>
                    <v-card flat class="pl-10">
                      <v-card-subtitle class="subtitle-1">Email: {{isUserEmail}}</v-card-subtitle>
                      <v-card-subtitle class="subtitle-1">Имя: {{isUserName}}</v-card-subtitle>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-subtitle class="subtitle-1 ma-2 text-center">
                          Отправить на почту письмо с изменением пароля<br/>
                        <v-btn class="primary" @click="editPassword"><v-icon>email</v-icon></v-btn>
                      </v-card-subtitle>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>

                        <p
                          class="mb-0"
                        >Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
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
      fotoFile: null,
      fotoUrl: null
    };
  },
  computed: {
    ...mapGetters(["isUserName", "isUserEmail", "isUserImage"]),
    filterImage() {
      if (this.isUserImage != null) {
        return this.isUserImage;
      } else {
        return this.photo;
      }
    },

    fotoUrlF() {
      let dis = false;
      if (this.fotoFile != null) {
        dis = true;
      }
      return dis;
    },

    fotoFileF() {
      let dis = false;
      if (this.fotoUrl != null) {
        dis = true;
      }
      return dis;
    }
  },
  methods: {
    fotoF() {
      if (this.fotoFile != null) {
        this.$store.dispatch("SetImageStore", this.fotoFile);
      } else {
        this.$store.dispatch("SetImageUrl", this.fotoUrl);
      }
      this.dialogFoto = false;
    },
    editPassword(){
      this.$store.dispatch("EditPasswordAction", this.isUserEmail)
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