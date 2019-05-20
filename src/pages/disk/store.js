import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore, oneOf, extIcon } from "@/assets/js/utils";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileToIds: [],
        selectedItems: {
            dirs: [],
            files: []
        },
        ajaxLoadMessage: {
            loding: true,
            title: ''
        },
        driveType: '',
        memory: {
            basic: getStore('memory_basic'),
            rate: getStore('memory_rate'),
            total: getStore('memory_total'),
            used: getStore('memory_used'),
        },
        Uploader: {
            UploaderDrag: false,
        }
    },
    mutations: {},
    actions: {}
})