/**
 * 时间转换工具类
 */
export default class TimeUtils{

    /**
     *  s 转换 00:00(分秒)
     */
   static getLongFitTime(longTime){
        if (longTime <= 0){
            return ' '
        }else if (longTime < 60){
            return longTime
        }

        var branch_time = parseInt(longTime / 60)
        var time_s = longTime % 60
        return  time_s > 10 ? branch_time + ':' + time_s : branch_time + ':0' + time_s
    }

    /**
     *  s 转换 00:00:00(时分秒)
     */
    static getHourFitTime(longTime){
        if (longTime <= 0){
            return ' '
        }else if (longTime < 60){
            return longTime
        }
        var time = parseInt(longTime / 60)
        var branch_time = time % 60 // 分
        var hour_tiem = parseInt(time / 60)//时
        var time_s = longTime % 60                // 秒
        return  time_s > 10 ? hour_tiem + ':'+ branch_time + ':' + time_s : branch_time + ':0' + time_s
    }
}