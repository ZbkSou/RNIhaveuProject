const apiMap = new Map();
let host =__DEV__?
    'http://test-api-server.ihaveu.com/api':
    "http://www.ihaveu.com/api";
/**
登录
请求方式: post
请求地址:
http://test-api-server.ihaveu.com/login

对应java接口:post("/user-service/login", params)
请求参数：
{
phone: "18810610046", 手机号 或者邮箱
password: "12333"
}
 */
apiMap.set('LOGIN',getUrl("/login"));



function getUrl(api) {
    return host + api;
}

export default apiMap;