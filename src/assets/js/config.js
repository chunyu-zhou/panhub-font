let Env = (process.env.VUE_APP_ENV).toLowerCase() // development   production
let DevUrl = '/api' //测试服地址
let PRODUrl = '' //正式服地址
let DoUrl = Env == 'production' ? PRODUrl : DevUrl
// let PROD = Env == 'production' ? 'https://' : 'http://'
let PROD = ''
let ApiUrl = PROD + DoUrl
let config = {
  NODE_ENV: Env,
  dourl: DoUrl,
  apiurl: ApiUrl,
  PROD_URL: PRODUrl,
  DEV_URL: DevUrl,
  system_info: {
    site_name: process.env.VUE_APP_SITENAME,
    status: 1
  }
}
export default config
