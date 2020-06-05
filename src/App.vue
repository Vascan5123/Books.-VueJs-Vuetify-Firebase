<template>
  <div id="app">
    <v-app>
      <toolbar />

      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import toolbar from "./components/toolbar.vue";

export default {
  name: "App",
  components: {
    toolbar
  }
};
</script>


<style>
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
.v-btn:before {
  background-color: transparent !important;
}
</style>>