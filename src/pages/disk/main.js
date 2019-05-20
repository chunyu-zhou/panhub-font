import Vue from 'vue'
import iView from 'iview'
import Disk from './Disk.vue'
import store from './store'
import router from './router'
import '@/assets/css/common.less'
import '@/assets/css/module/disk/disk.less'
import '@/assets/css/module/upload.less'
import Ajax from '@/assets/js/ajax'

Vue.prototype.$ajax = Ajax

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(router)

new Vue({
    store,
    router,
    render: h => h(Disk)
}).$mount('#app')