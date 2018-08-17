/**
* 购物车
*
*/
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';


export default class CartPage extends Component {
	 constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
      return(
          <Text>Hello {this.props.name} xxx!</Text>
        );
    }



}