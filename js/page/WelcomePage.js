/**
 * 欢迎页面
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
// import NavigationBar from '../common/NavigationBar'

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }

    componentDidMount() {
        this.timer=setTimeout(()=> navigation.navigate('Main')
        , 2000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
             
                <Text style={styles.tips}>欢迎</Text>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})
