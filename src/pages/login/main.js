import Vue from 'vue'
import iView from 'iview'
import Login from './Login.vue'
import '@/assets/css/common.less'
import Ajax from '@/assets/js/ajax'

Vue.prototype.$ajax = Ajax

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
    render: h => h(Login)
}).$mount('#app')