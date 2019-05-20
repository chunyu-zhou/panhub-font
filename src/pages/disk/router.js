import Vue from 'vue'
import Router from 'vue-router'

// 以下写法是懒加载写法，结合 Vue 的 异步组件 和 Webpack 的 code splitting feature, 轻松实现路由组件的懒加载。
const filelistWarp = r => require.ensure([], () => r(require('./conponents/filelistWarp')), 'filelistWarp')
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            redirect: '/disk',
            meta: { model: 'disk' },
        },
        {
            path: '/disk',
            component: filelistWarp,
            name: 'filelist',
            meta: { model: 'disk' },
        }
    ]
})