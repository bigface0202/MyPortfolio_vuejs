<template>
  <footer class="footer">
    <p class="footer__copyright">Copyright © 2021 Y-KISSY All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.footer {
  width: 100%;
  max-height: 100px;
  background-color: $concept_lighten_color !important;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  &__copyright {
    margin: 50px 0;
    font-size: 0.5rem;
    text-align: center;
  }
}
</style>
