/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 首页
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import CartPage from '../CartPage';
import HomePage from '../HomePage';


var navigation = null;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 26,
        width: 26,
    }

});
class Main extends Component {
     constructor(props) {
        super(props);
        this.state = {selectedTab: "home"};
        navigation = this.props.navigation;
    }
    _renderTab( Component,selectedTab, title, renderIcon,badge) {
        return (
            <TabNavigator.Item
                        selected={this.state.selectedTab === selectedTab}
                        title={title}
                        selectedTitleStyle={{color:"#d41977"}}//设置tab标题颜色
                        renderIcon={() => <Image style={styles.image} source={renderIcon} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#d41977'}]} source={renderIcon} />}//设置图标选中颜色
                        badgeText={badge}
                        onPress={() => this.setState({ selectedTab: selectedTab})}>
                        {Component}
                        
            </TabNavigator.Item>
        )
    }

    render(){
      return(
        <View style={styles.container}>
          <TabNavigator>
            {this._renderTab( <HomePage name='Rexxar' navigation={navigation}  />,'home','首页',require('../../../res/images/ic_nav_category.png'),1)}
            {this._renderTab( <CartPage name='gggg' navigation={navigation}/>,'miaosha','秒杀',require('../../../res/images/ic_nav_category.png'),2)}
            {this._renderTab(<View style={styles.pages}><Text>这是s页</Text></View>,'category','分类',require('../../../res/images/ic_nav_category.png'),3)}
            {this._renderTab(<View style={styles.pages}><Text>这是sss页</Text></View>,'car','购物袋',require('../../../res/images/ic_nav_category.png'),4)}
            {this._renderTab(<View style={styles.pages}><Text>这是aa页</Text></View>,'mine','我的',require('../../../res/images/ic_nav_category.png'),5)}
          </TabNavigator> 
        </View>
        );
    }
}

module.exports = Main;