/**
*  配置路由 
*  需要跳转的页面需要在这里配置
*
*/
// register all screens of the app (including internal ones)
import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import Main from '../page/main/MainPage';
import Set from '../page/mine/SetPage';
import Welcome from '../page/WelcomePage';

export default NaviApp = StackNavigator({
	Main: {screen: Main},
   	Set:{screen:Set},
   	Welcome:{screen:Welcome}
},{
    initialRouteName: 'Welcome',
    navigationOptions: {
        header:null

    },
});

