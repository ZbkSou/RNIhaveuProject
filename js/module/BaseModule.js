/**
 * <p>Title: </p>
 * <p>Description: 隔离 netutil。 可以统一配置 header </p>
 * <p>Company: ihaveu</p>
 * Created by iuzuan on 2018/4/23.
 */
import NetUtil from '../network/NetUtil';
import api from '../base/Api';
import userManager from '../base/UserManager'

function getHeaders() {
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': userManager.getAccessToken()
  };
  return header
}


/**
 * get 请求带参
 * @param url
 * @param cb
 * @param params
 */
export function get(url, cb, params) {
  NetUtil.get(api.get(url), getHeaders(), params).then(result => {
    //添加数据处理方式
    cb(null, result);
  }).catch(error => {
    cb(error, null);
  })
}

/**
 * post请求无参
 * @param url
 * @param cb
 * @param params
 */
export function postNoParams(url, cb) {
  NetUtil.postNoParams(api.get(url), getHeaders()).then(result => {
    //添加数据处理方式
    cb(null, result);

  }).catch(error => {
    cb(error);
  })
}

/**
 * post请求带参
 * @param url
 * @param cb
 * @param params
 */
export function post(url, cb, params) {
  NetUtil.post(api.get(url), params, getHeaders()).then(result => {
    //添加数据处理方式
    cb(null, result);
  }).catch(error => {
    cb(error);
  })

}
