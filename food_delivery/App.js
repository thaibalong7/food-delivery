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
    StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './src/navigators/rootstack';
import { store, persistor } from './store';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootStack />
                </PersistGate>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({

})