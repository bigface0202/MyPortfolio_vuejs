<template>
<v-app id="app">
  <the-navigation />
  <v-main>
  <router-view />
  </v-main>
</v-app>
</template>

<script>
import TheNavigation from "@/components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
