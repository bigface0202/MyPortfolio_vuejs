<template>
  <section class="about-me">
    <v-container>
      <v-row class="about-me__contents">
        <v-col md="3" class="about-me__contents-img">
          <v-img :src="require('@/assets/img/me3.png')"></v-img>
        </v-col>
        <v-col md="9" class="about-me__contents-text">
          <v-card flat outlined>
            <v-card-title>
              About Me
            </v-card-title>
            <v-card-text>
              初めまして！岸下優介（Yusuke Kishishita）と申します。
              今は東京都内で機械学習エンジニア兼ミャンマーのエンジニアチームとの共同プロジェクトをやっております。
              2020年3月までは広島大学生体システム論研究室で博士課程に所属しており、人間に関する研究（主に触覚や力覚・筋感覚などの知覚）を行っておりました。
              人間に対する（主に筋肉）理解を深めていきたい所存であります。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.about-me {
  &__text {
    margin: 20px 20px 20px;
  }
  &__contents {
    justify-content: center;
    margin-top: 20px;
    &-img {
      text-align: center;
    }
    &-text {
      padding: 10px;
      font-size: 2.4rem;
      word-wrap: break-word;
    }
  }
}
</style>
