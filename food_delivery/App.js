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
import { View } from 'react-native';
import Login from './src/components/Login'
import Register from './src/components/Register'
import ForgetPassword from './src/components/ForgetPassword';
import MerchantDetail from './src/components/MerchantDetail';
import ItemOfListMerchantDetail from './src/components/ItemOfListMerchantDetail';
import Merchant from './src/components/Merchant';
import ItemOfListMerchant from './src/components/ItemOfListMerchant'
export default class App extends Component {
    render() {
        return (
            <View>
                <Merchant></Merchant>
            </View>
        );
    }
}