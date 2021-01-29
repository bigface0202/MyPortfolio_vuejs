import Vue from 'vue'
import Router from 'vue-router'

/**
 * vue-router v3.1.0から、同一画面に遷移するとコンソールエラーが発生するようになった
 * push関数にエラーハンドリングを追加して、デフォルトの関数を上書きすることで対応
 * @see https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/profile' },
        {
            name: 'profile',
            path: '/profile',
            component: require('@/pages/MyProfile.vue').default
        },
        {
            name: 'publications',
            path: '/publications',
            component: require('@/pages/MyPublications.vue').default
        },
        {
            name: 'works',
            path: '/works',
            component: require('@/pages/MyWorks.vue').default
        }
    ]
})

export default router;