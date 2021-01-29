import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
// フォント関係
import "@mdi/font/css/materialdesignicons.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
// 言語設定
import ja from "vuetify/es5/locale/ja"

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: "md" || "mdi"
  },
  lang: {
    locales: { ja },
    current: "ja"
  }
})