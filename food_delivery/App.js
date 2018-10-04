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
import { View, StyleSheet } from 'react-native';
import Login from './src/components/Login'
import Register from './src/components/Register'
import ForgetPassword from './src/components/ForgetPassword';
import MerchantDetail from './src/components/MerchantDetail';
import ItemOfListMerchantDetail from './src/components/ItemOfListMerchantDetail';
import Merchant from './src/components/Merchant';
import ItemOfListMerchant from './src/components/ItemOfListMerchant'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Router, Scene, Modal } from 'react-native-router-flux';



class TabIcon extends React.Component {
    render() {
      /** some styling **/
      return (
        <View><Icon name={'food-fork-drink'} size={26} style={{color: "#FB8C00"}}></Icon></View>
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
                    <Scene key="merchant" component={Merchant} title='Merchant' renderBackButton={() => (null)}></Scene>
                    <Scene key="tabbar" activeTintColor={'#FB8C00'} tabs hideNavBar>
                        <Scene key="merchantDetail"
                            component={MerchantDetail}
                            title='Merchant Detail'
                            hideNavBar
                            icon={TabIcon}>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
const styles = StyleSheet.create({

})