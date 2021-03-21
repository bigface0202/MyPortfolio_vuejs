<template>
  <div class="valorant">
    <v-img class="valorant__img__valorant" :src="require('@/assets/img/VALORANT_JETT_Duotoned.jpg')"></v-img>
    <p class="valorant__text">
      皆さん、VALORANTってご存知ですか？<br>
      VALORANTとはFPS（First Person Shooting）の一種です。<br>
      自分もほぼ中学生以来、久しぶりにFPSにドハマりしてしまいました。
    </p>
    <v-img class="valorant__img__specialforce" :src="require('@/assets/img/specialforce.jpeg')"></v-img>
    <label class="valorant__img__caption">
      中学時代はハンゲのスペシャルフォースにドハマりしていた。
    </label>
    <p class="valorant__text">
      このゲームの醍醐味は、普通の人が撃ち合うFPSというわけではなく、個々のキャラクター毎に特殊スキルが搭載されているという点です。<br>
      元々FPS自体は、撃ち合いのスキルと戦術の優劣を競い合う事が醍醐味ではありますが、特殊スキルを用いることによって更なる心理戦へと持ち込むことが可能となります。<br>
      自分がドハマりしてしまったのは、この<b>心理戦</b>の部分。ここにスモークを仕掛けたら相手はこう思うじゃないのか…、ここに壁を作るとは思わないだろう…などなどスキルを駆使して相手の意表を突くのがVALORANTの一番の醍醐味だと思います。<br>
      その挑戦の数々を紹介できればなと思います。<br>
      ちなみに自分のランクはまだBRONZEなので、上手な方はBRONZEがアホなことやってるわーくらいで流してください。<br>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.valorant {
  margin: 0;
  &__img {
    &__valorant {
      width: 80%;
      margin: 0 auto;
    }
    &__specialforce {
      width: 30%;
      margin: 0 auto;
    }
    &__caption {
      display: block;
      margin-top: 20px;
      font-size: 0.8rem;
      text-align: center;
    }
  }
  &__text {
    margin-top: 20px;
    font-size: 1.2rem;
  }
}
</style>
