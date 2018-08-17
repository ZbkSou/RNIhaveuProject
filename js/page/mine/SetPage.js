/**
* 设置页面
*
*/
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
     Alert,
    Button,
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
export default class SetPage extends Component {
	 constructor(props) {
        super(props);
  
    }
    render(){
      const { params } = this.props.navigation.state;
      return(
      	<View>
         <NavigationBar
                    title={"设置"}
                    style={{backgroundColor: '#6495ED'}}
                />
          <Text>this is SetPage{params.name} </Text>
			</View>
        );
    }
 

}