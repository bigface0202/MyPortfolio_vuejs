<template>
  <div id="app">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <!-- v-bind使えばpropsでcolorのスタイルを持ってこれる！ -->
      <v-timeline-item
        v-bind:color="color"
        small
        :left="!isRight(side)"
        :right="isRight(side)">
        <v-card>
          <v-card-title v-bind:class="color">
            <v-icon dark size="32" class="mr-4">{{ icon }}</v-icon>
            {{ year }}
          </v-card-title>
          <v-container>
            <v-row>
              <v-col md="12">{{ school }}{{ description }}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  props: ['id', 'year', 'school', 'description', 'icon', 'color', 'side'],
  methods: {
    isRight (side) {
      if (side === 'right') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h4 {
  font-weight: light;
  color: white;
}

p {
  padding-right: 10%;
  font-weight: light;
  color: white;
}
</style>
