import Vue from 'vue'
import Vuetify from 'vuetify'

import router from '@/router.js'
import App from '@/App.vue'
import store from '@/store/index.js';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';

Vue.component('base-card', { BaseCard })
Vue.component('base-badge', { BaseBadge })

Vue.use(Vuetify);

new Vue({
    vuetify: new Vuetify(),
    router,
    store,
    render: h => h(App)
}).$mount('#app')