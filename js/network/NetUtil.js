/**
 * NetUitl ,只处理网络请求
 */
import LogUtil from '../util/LogUtil';

/**
 *
 * @type {string}
 */
let SUCCESS_CODE = 200;

class NetUtil {

    static get(url,headers, params) {

        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
        }
        LogUtil.log(`Get resuest info ：time = ${new Date().getTime() }  url: ${url} \n header :${JSON.stringify(headers)}`);
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers:headers,
            })
                .then(response => response.json())
                .then(result => {
                    if (!result.execErrCode || result.execErrCode == SUCCESS_CODE) {
                        resolve(result);
                        LogUtil.log(JSON.stringify(result));
                    } else {
                        reject(result.execMsg);
                        LogUtil.log('Not 200 ok msg', JSON.stringify(result.execMsg));
                    }
                })
                .catch(error => {
                    reject(error);
                    LogUtil.log('Error',error);
                })
        })
    }

    /**
     * post带参请求
     * @param url
     * @param data
     * @param headers
     */
    static post(url, data,headers) {
        LogUtil.log(`Post request info: time = ${new Date().getTime() }  url: ${url} \n header :${JSON.stringify(headers)} \n params: ${ JSON.stringify(data)}`);
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers:headers,
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    if (result.execErrCode == SUCCESS_CODE) {
                        resolve(result);
                        LogUtil.log(JSON.stringify(result));
                    } else {
                        reject(result.execMsg);
                        LogUtil.log('Not 200 ok msg', JSON.stringify(result.execMsg));
                    }
                })
                .catch(error => {
                    reject(error);
                    LogUtil.log('Error',error);
                })
        })
    }

    /**
     * post无参请求
     * @param url
     * @param headers
     */
    static postNoParams(url,headers) {
        LogUtil.log(`Post requst info :time = ${new Date().getTime() }  url: ${url} \n header :${JSON.stringify(headers)}`);
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers:headers,
            })
                .then(response => response.json())
                .then(result => {
                    if (result.execErrCode == SUCCESS_CODE) {
                        resolve(result);
                        LogUtil.log(JSON.stringify(result));
                    } else {
                        reject(result.execMsg);
                        LogUtil.log('Not 200 ok msg', JSON.stringify(result.execMsg));
                    }
                })
                .catch(error => {
                    reject(error);
                    LogUtil.log('Error',error);
                })
        })
    }
}
function disposeResponse(responseJSON) {
    if (responseJSON.execErrCode === SUCCESS_CODE) {
       return  responseJSON
                    } else {

                    }
}

export default NetUtil;