import Vue from 'vue'
import Vuex from 'vuex';

import publicationsModule from '@/store/modules/publications.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        pubs: publicationsModule,
    },
})
