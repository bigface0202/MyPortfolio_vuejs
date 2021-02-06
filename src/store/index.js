import Vue from 'vue'
import Vuex from 'vuex';

import publicationsModule from '@/store/modules/publications.js';
import timeLineModule from '@/store/modules/timeline.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        pubs: publicationsModule,
        tl: timeLineModule,
    },
})
