/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
//react-native run-android
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Login from './src/components/Login'
import Register from './src/components/Register'
import ForgetPassword from './src/components/ForgetPassword';
import MerchantDetail from './src/components/MerchantDetail';
import ItemOfListMerchantDetail from './src/components/ItemOfListMerchantDetail';
import Merchant from './src/components/Merchant';
import ItemOfListMerchant from './src/components/ItemOfListMerchant'
import User from './src/components/User'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Router, Scene, Modal } from 'react-native-router-flux';



class TabIcon extends React.Component {
    render() {
        /** some styling **/
        var color = this.props.selected ? '#F57C00' : '#FFCC80'
        console.log(this.props.selected)
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
                <Icon name={this.props.iconName} size={26} style={{ color: color }}></Icon>
                <Text style={{ color: color }}>{this.props.title}</Text>
            </View>
        );
    }
}
export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title='Login' initial hideNavBar> </Scene>
                    <Scene key="register" component={Register} title='Register' hideNavBar></Scene>
                    <Scene key="forgetPassword" component={ForgetPassword} title='Forget Password' hideNavBar></Scene>
                    <Scene key="merchant" component={Merchant} hideBackImage title='Merchant'
                        titleStyle={{ color: 'white' }}
                        navigationBarStyle={{ backgroundColor: "#FFB74D" }}
                        renderBackButton={() => (null)}></Scene>
                    <Scene key="tabbar"
                    activeTintColor={'#FB8C00'}
                    inactiveTintColor={'#FFCC80'}
                       tabs hideNavBar>
                        <Scene key="merchantDetail"
                            component={MerchantDetail}
                            title={'Merchant Detail'}
                            hideNavBar
                            icon={TabIcon}
                            iconName={'food-fork-drink'}>
                        </Scene>
                        <Scene key="user"
                            component={User}
                            title={"User"}
                            hideNavBar
                            icon={TabIcon}
                            iconName={'account'}>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
const styles = StyleSheet.create({

})