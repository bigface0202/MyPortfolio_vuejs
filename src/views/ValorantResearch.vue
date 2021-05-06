<template>
  <div class="vresearch">
    <h1 class="vresearch__title">Valorant Research</h1>
    <p class="vreasrch__text">主にブリムストーンのTipsを紹介していく。</p>
    <h2 class="vresearch__subtitle">SPLIT</h2>
    <p class="vreaserch__text">
      スプリットにおいてハイミッドはかなりの要所。ここを破られるとAもBも裏取りされることになり、かなりのダメージを受ける。<br>
      あなたは「Sage, mid plz」を聞いたことがないだろうか。そう、ハイミッドに壁を設けることで早期の侵入を防ぐわけである。<br>
      攻撃側のあなたとしては早めに壁を取り除きたい場合、この動画は役に立つだろう。
    </p>
    <video class="vresearch__video" :src="require('@/assets/img/Valorant_sage.mp4')" controls preload="metadata" />
  </div>
</template>


<style lang="scss" scoped>
.vresearch {
  width: 100%;
  &__title {
    margin: 10px;
  }
  &__subtitle {
    margin: 10px;
  }
  &__text {
    font-size: 1rem;
  }
  &__video {
    width: 80%;
  }
}
</style>
