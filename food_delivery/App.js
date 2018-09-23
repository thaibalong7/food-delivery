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
import Login from './src/components/Login';
export default class App extends Component {
    render() {
        return (
            <View>
                <Login></Login>
            </View>
        );
    }
}