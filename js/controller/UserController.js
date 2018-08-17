/**
 * <p>Title: 用户相关控制层</p>
 * <p>Description: </p>

 * @author zhouhui
 * @date 2018/4/28.
 */
import {get, post, postNoParams} from '../module/BaseModule';
import userManager from '../base/UserManager'
/**
 *  登录
 */
export function login(phone,password,cb) {
	let params = {
        phone:phone,
        password:password
    };
     post('LOGIN', (err, result) => {
        if (err != null || err != undefined) {
            cb(err);
            return;
        }
        try {
           	userManager.setUser(result.data);
            cb(null, result);
        } catch (err) {
            cb(err, null);
        }
    },params)

}
