/** 
*  本地储存 控制类
*
*/

import React, {Component} from 'react';
import {
    AsyncStorage,
} from 'react-native';
export default class AsyncStorageTest{
   


   /**
   * cb :(error)=> {
            if (!error) {
                this.toast.show('保存成功', DURATION.LENGTH_LONG);
            } else {
                this.toast.show('保存失败', DURATION.LENGTH_LONG);
            }
        }
   */
    save(key,value,cb) {
        AsyncStorage.setItem(key, value, cb);
    }

/**
*
*cb :(error, result)=> {
            if (error) {
                this.toast.show('取出失败', DURATION.LENGTH_LONG);
            } else {
                if (result) {
                    this.toast.show('取出的结果为:' + result, DURATION.LENGTH_LONG);
                } else {
                    this.toast.show('没有找到对应的内容', DURATION.LENGTH_LONG);
                }
            }
        });
*
*/
    get(key,cb) {
        AsyncStorage.getItem(key, cb);
    }
    /*
    *cb :(error)=>{
            if (!error) {
                this.toast.show('移除成功', DURATION.LENGTH_LONG);
            } else {
                this.toast.show('移除失败', DURATION.LENGTH_LONG);
            }
        }
    *
    */
    remove(key,cb){
        AsyncStorage.removeItem(key,cb);
    }
}