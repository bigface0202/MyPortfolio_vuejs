<template>
  <section>
    <v-card class="mx-auto">
      <v-img :src="image"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>仕様：{{ assets }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange lighten-2" text>Explore</v-btn>
        <v-spacer />
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />
          <v-card-text>
            {{ description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </section>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  props: [
    "id",
    "title",
    "assets",
    "description",
    "image",
    "articleName",
    "articleURL",
  ],
};
</script>