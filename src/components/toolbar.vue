<template>
  <div id="toolbar">
    <v-navigation-drawer class="teal darken-2" v-model="drawer" absolute dark temporary>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title v-html="this.$store.getters.isUserEmail"></v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item :to="item2.content" v-for="item2 in menuItems" :key="item2.title" link>
          <v-list-item-icon>
            <v-icon>{{ item2.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item2.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!--Quit-->
        <v-list-item v-if="this.isUserAuthenticated" stop text @click="dialog = true">
          <v-list-item-icon>
            <v-icon>power_settings_new</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Quit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Confirm_Quit-->
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Confirm Quit</v-card-title>

            <v-card-text class="mt-5">You want quit?</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" outlined @click="dialog = false">No</v-btn>
              <v-btn color="primary" @click="SignOut()">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      dark
      class="toolbarHeader"
      :class="[toolbarTransparent == true || toolbarTransparent == 'true' ? 'toolbarTransparent': 'toolbarBlack']"
    >
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="toolbarisTransparent(false)">
        <router-link :to="primary_page" class="white--text">Reading Books</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          :to="item2.content"
          stop
          text
          v-for="item2 in menuItems"
          :key="item2.title"
          @click="toolbarisTransparent(item2.toolbarT)"
        >
          <v-icon left v-html="item2.icon"></v-icon>
          {{item2.title}}
        </v-btn>

        <v-btn v-if="this.isUserAuthenticated" stop text @click="dialog = true">
          <v-icon left>power_settings_new</v-icon>Quit
        </v-btn>
        <!-- Confirm_Quit-->
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Confirm Quit</v-card-title>

            <v-card-text class="mt-5">You want quit?</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" outlined @click="dialog = false">No</v-btn>
              <v-btn color="primary" @click="SignOut()">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      drawer: false,
      primary_page: "/",
      dialog: false
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    toolbarTransparent() {
      return this.$store.getters.get_toolbarTransparent;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            {
              title: "News",
              icon: "library_books",
              content: "/news",
              toolbarT: true
            },
            {
              title: "Books",
              icon: "menu_book",
              content: "/books",
              toolbarT: true
            },
            {
              title: "My Account",
              icon: "account_circle",
              content: "/profile",
              toolbarT: false
            }
            //button quit
          ]
        : [
            {
              title: "News",
              icon: "library_books",
              content: "/news",
              toolbarT: true
            },
            {
              title: "Books",
              icon: "menu_book",
              content: "/books",
              toolbarT: true
            },
            {
              title: "SignUP",
              icon: "person_add",
              content: "/SignUp",
              toolbarT: false
            },
            {
              title: "SignIn",
              icon: "person",
              content: "/SignIn",
              toolbarT: false
            }
          ];
    }
  },
  methods: {
    SignOut() {
      this.$store.dispatch("SignOut1");
    },
    toolbarisTransparent(payload) {
      this.$store.dispatch("SetToolbarTransparent", payload);
    }
  }
};
</script>

<style>
.toolbarTransparent {
  z-index: 2;
  widows: 100%;
  background: rgba(0, 0, 0, 0) !important;
  position: absolute;
  width: 100%;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0) !important;
  text-shadow: 1px 1px 2px black;
}
</style>>







