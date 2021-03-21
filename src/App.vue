<template>
  <v-app id="app" class="portfolio">
    <original-header class="portfolio__header" />
    <original-sidebar class="portfolio__sidebar"/>
    <div class="portfolio__wrapper">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import OriginalHeader from '@/components/common/header/header.vue'
import OriginalSidebar from '@/components/common/sidebar.vue'

export default {
  components: {
    OriginalHeader,
    OriginalSidebar
  }
}
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  font-size: 15px;
}

.portfolio {
  background-color: #91c8fc !important;
  &__sidebar {
    float: right;
    width: 10vh;
  }
  &__wrapper {
    /* display: flex; 要素を横並びにする */
    flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */

    /* サイドバーのwidth分だけ範囲を削除 */
    width: calc(100% - 200px);
    min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

    /* サイドバーで隠れるので右に寄せる */
    margin: 0 0 0 180px;
  }
}

#app {
  font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
