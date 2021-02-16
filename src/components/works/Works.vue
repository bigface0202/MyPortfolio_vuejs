<template>
  <section>
    <div class="works__title">
      <div class="works__title-text">About My Works</div>
    </div>
    <v-container>
      <v-row>
        <v-col md="3">
          <v-card class="mx-auto">
            <v-img :src="require('@/assets/img/volumetracker_ver2.gif')"></v-img>
            <v-card-title>Volume Tracker</v-card-title>
            <v-card-subtitle>仕様：Flutter</v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text>Explore</v-btn>
              <v-spacer/>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider/>
                <v-card-text>
                  Flutterで初めて作ったアプリです。筋トレを行った部位のメモを取ることができます。
                  部位のみを記録する簡素化されたアプリです。
                  行った部位のボリュームをグラフで表示することもできます。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data:()=>({
    show: false,
  })
};
</script>