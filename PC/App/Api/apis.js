import http from '@/Api/http'

export default {
  /**
 * 获取配置
 * @param {json} params web的参数
 */
  getWebInfoById (params) {
    return http.get('WebSignIn/GetWebSignInById', params)
  }
}
