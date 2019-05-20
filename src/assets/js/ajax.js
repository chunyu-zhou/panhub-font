import axios from 'axios'
import config from './config'

const ajaxUrl = config.apiurl


const $ajax = {
  get: function (url, data, config) {
    return _method(url, data, config, 'get')
  },
  post: function (url, data, config) {
    return _method(url, data, config, 'post')
  },
  delete: function (url, data, config) {
    return _method(url, data, config, 'delete')
  },
  head: function (url, data, config) {
    return _method(url, data, config, 'head')
  },
  put: function (url, data, config) {
    return _method(url, data, config, 'put')
  },
  patch: function (url, data, config) {
    return _method(url, data, config, 'patch')
  }
}
const _method = function (url, data, config, method) {
  var qs = require('qs')
  let AjaxConfig = {
    method: method,
    url: ajaxUrl + url,
    timeout: 5000,
    data: method == 'delete' ? data : qs.stringify(data),
    responseType: config ? config.responseType : 'json',
    headers: { Authorization: window.localStorage.getItem('token') }
  }
  if (method == 'get') {
    AjaxConfig.params = data
  }

  return axios(AjaxConfig).then(function (ret) {
    return ret.data || ret
  }).catch(function () {

  })
}

export default $ajax
