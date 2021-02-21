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
  background: url("../assets/img/winter_mountain.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 75vh;
  @include display_pc {
    font-size: 40px;
  }

  &__text {
    color: black;
    font-size: 28px;
    vertical-align: bottom;

    // @include display_pc {
    //   font-size: 40px;
    // }
  }
}
.home-hero__notes{
  text-align: right;
  font-size: 5px;
}
</style>