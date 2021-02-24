<template>
<v-app id="app" class="main">
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
.main{
  background-color: #91c8fc !important;
}
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-size: 15px;
}

body {
  margin: 0;
}

.v-application{
    font-family: "M Plus 1p" !important;
}
</style>
