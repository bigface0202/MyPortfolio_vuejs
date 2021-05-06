module.exports = {
    transpileDependencies: [
      'vuetify'
    ],
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "./src/assets/sass/common.scss";`
        }
      }
    }
  }