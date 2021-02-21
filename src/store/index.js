import Vue from 'vue'
import Vuex from 'vuex';

import publicationsModule from '@/store/modules/publications.js';
import timeLineModule from '@/store/modules/timeline.js';
import works from '@/store/modules/works.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        pubs: publicationsModule,
        tl: timeLineModule,
        works: works,
    },
})
