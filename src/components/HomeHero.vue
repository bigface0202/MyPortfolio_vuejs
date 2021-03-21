<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content__text">
        </v-col>
      </v-row>
    </v-container>
    <p class="home-hero__notes">Illustration from
      <a target=”_blank” rel=”noopener” href="https://mixkit.co/@adriannewalujo/">here</a>
    </p>
  </section>
</template>
<style lang="scss" scoped>
.home-hero__content {
  width: 100%;
  height: 75vh;
  background: url("../assets/img/winter_mountain.png");
  background-position: center center;
  background-size: cover;

  @include display_pc {
    font-size: 4rem;
  }
  &__text {
    font-size: 2.8rem;
    color: black;
    vertical-align: bottom;
  }
}

.home-hero__notes {
  font-size: 0.5px;
  text-align: right;
}
</style>
