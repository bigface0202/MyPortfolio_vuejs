<template>
  <header class="header">
    <v-card class="header__card" flat>
      <v-card-title class="text-center justify-center py-6">
        <p class="header__title__text">
          y-kissy
        </p>
      </v-card-title>
      <nav class="header__nav">
        <ul class="header__nav__list">
          <li class="header__nav__list__items" v-for="navItem in navItems" :key="navItem.name">
            <a class="header__nav__list__items--url" :href="navItem.url" v-if="!navItem.children">{{ navItem.name }}</a>
            <span class = "header__nav__list__items__vertical" v-else v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">{{ navItem.name }}
              <ul class="header__nav__list__items__vertical__nav" :class="{ isOpen }">
                <li class="header__nav__list__items__vertical__nav__items" v-for="child in navItem.children" :key=child.name>
                  <a class="header__nav__list__items__vertical__nav__items--url" :href="child.url">
                    {{ child.name }}
                  </a>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </nav>
    </v-card>
  </header>
</template>

<script>
import constants from './constants.js'

export default {
  data () {
    return {
      drawer: false,
      navItems: constants.navItems,
      isOpen: false
    }
  },
  methods: {
    mouseOver () {
      this.isOpen = true
      return this.isOpen
    },
    mouseLeave () {
      this.isOpen = false
      return this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  font-size: 1rem;
  &__card {
    background-color: #c3e2ff !important;
  }
  &__title {
    text-align: center;
    background-color: #c3e2ff !important;
    &__text {
      color: #4a47a3 !important;
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    &__list {
      display: flex;
      margin: 0;
      list-style-type: none;
      background-color: #c3e2ff !important;
      &__items {
        margin: 0 20px;
        &--url {
          display: block;
          height: auto;
          padding: 20px;
          text-decoration: none;
        }
        &__vertical {
          position: relative;
          z-index: 1;
          display: block;
          height: auto;
          padding: 20px;
          text-decoration: none;
          &__nav {
            position: absolute;
            top: 100%;
            left: 0;
            display: none;
            padding: 0;
            list-style-type: none;
            background-color: #007db9;
            &__items {
              width: 250px;
              border-bottom: 1px solid #fff;
              &--url {
                display: block;
                padding: 10px;
                color: #fff;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  .isOpen {
    display: block;
  }
}
</style>
