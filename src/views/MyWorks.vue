<template>
  <div class="myworks">
    <v-sheet class="myworks__sheet">
      <v-slide-group class="myworks__sheet__slide" multiple show-arrows>
        <v-slide-item class="myworks__sheet__slide__item" v-for="work in works" :key="work.id">
          <v-card class="myworks__sheet__slide__item__card" flat outlined>
            <v-img :src="work.image" max-height="320" max-width="320"></v-img>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-card-subtitle>仕様：{{ work.assets }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue lighten-2" text>Explore</v-btn>
              <v-spacer />
              <v-btn icon @click="work.show = !work.show">
                <v-icon>{{
                  work.show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="work.show">
                <v-divider />
                <v-card-text>
                  <p>{{ work.description }}</p>
                  <p><a target=”_blank” rel=”noopener” :href="work.articleURL">{{ work.articleName }}</a></p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    show: [false, false, false]
  }),
  computed: {
    works () {
      return this.$store.getters['works/works']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.myworks {
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 0;
  background-color: $concept_lighten_color;
  &__sheet {
    &__slide {
      margin: 0;
      &__item {
        margin: 0;
        &__card {
          width: 100%;
          max-width: 320px;
          height: 100%;
          margin: 20px 20px 20px 20px;
        }
      }
    }
  }
}

</style>
