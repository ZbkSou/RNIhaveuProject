/**
* 首页
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
import {login} from '../controller/UserController';
import Toast, {DURATION} from 'react-native-easy-toast';

var navigation = null;
export default class HomePage extends Component {
	 constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }
    checkClick() {
    	console.log("ssss");
    	login("13102272166","123123",(error, data) => {
            console.log(error + data);
        })
       
    }
    checkToast(){
    	this.refs.toast.show('hello world!',1000);
    }
    render(){
    	const {navigate} = this.props.navigation;
      	return(
      		<View>
          		<Text>Hello  {this.props.name}ssss！</Text>
          		<Button
  					onPress={()=>navigation.navigate('Set',{name: 'sdfsdf'})}
  					title="跳转"
  					color="#841584"
				/>
				<Button
  					onPress={()=>this.checkClick()}
  					title="请求"
  					color="#841584"
				/>
				<Button
  					onPress={()=>this.checkToast()}
  					title="Toast"
  					color="#841584"
				/>
				<Toast ref="toast"
					style={{backgroundColor:'gray'}}
                    position='center'
                    positionValue={200}
                    opacity={0.6}
                    textStyle={{color:'white'}}/>
			</View>
        );
    }
   
 

}