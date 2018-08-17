/**
 *  适配转换工具类
 *  ui设计基准
 *  图片 1242 * 2208
 *  设备的像素密度，例如：
 *  PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 *  PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 *  PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 *  PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 *  PixelRatio.get() === 3.5        Nexus 6
 */
import {
    PixelRatio,
    Dimensions
} from 'react-native';
//设备的宽度
export let ScreenWidth = Dimensions.get('window').width;
//设备的高度
export let ScreenHeight = Dimensions.get('window').height - 35;
//返回字体大小缩放比例
let fontScale = PixelRatio.getFontScale();
//当前设备的像素密度
let pixelRatio = PixelRatio.get();
//默认像素密度˙
const DEFAULT_DENSITY  = 3;
//px转换成dp
const w2 = 1242  / pixelRatio ;
const h2 = 2208  / pixelRatio ;

export default class FitUtils{

    /**
     * 适配文字
     * 设置text为sp
     * @param size sp 传入设计稿上的px
     */
    static getFitText(size) {
        let scaleWidth = ScreenWidth / w2;
        let scaleHeight = ScreenHeight / h2;
        //获取缩放比例
        let scale = Math.min(scaleWidth, scaleHeight);
        size = Math.round((size * scale + 0.5)  /  fontScale);
        return size / pixelRatio;
    }

    /**
     *  屏幕适配,缩放size
     * 适配view视图、图片等
     * @param sizePX
     */
    static getFitView(size) {
        let scaleWidth = ScreenWidth / w2;
        let scaleHeight = ScreenHeight / h2;
        let scale = Math.min(scaleWidth, scaleHeight);
        size = Math.round((size * scale + 0.5));
        return size / pixelRatio;
    }

    /**
     * 根据px转换当前设备的尺寸
     */
    static getWidthSize(widthPx){
        return ScreenWidth * (widthPx / 1242)
    }

    /**
     * 获取屏幕的宽
     */
    static getScreenWidth(){
        return ScreenWidth
    }

    /**
     * 后去屏幕的高
     */
    static getScreenHeight(){
        return ScreenHeight
    }

    static getHeightSize(heightPx){
        return ScreenHeight * (heightPx / 2208)
    }
}
