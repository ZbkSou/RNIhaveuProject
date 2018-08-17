/**
 * <p>Title: 日志工具类</p>
 * <p>Description: </p>

 * @author zhouhui
 * @date 2018/5/4.
 */

class LogUtil {

    static log(...msg) {
        if (__DEV__) {
            let length = msg.length;
            let str = `\nstart-->\n`;
            for (let i = 0; i < length; i++) {
                if (i === length - 1) {
                    str +=arguments[i];
                } else {
                    str +=arguments[i] + ',';
                }
            }
            str += `\n<--end\n`;
            console.log(str);
        }
    }

}

export default LogUtil;