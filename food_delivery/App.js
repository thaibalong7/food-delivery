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
import RootStack from './src/navigators/rootstack'


export default class App extends Component {
    render() {
        return (
            <RootStack />
            // <Router>
            //     <Scene key="root">
            //         <Scene key="login" component={Login} title='Login' initial hideNavBar> </Scene>
            //         <Scene key="register" component={Register} title='Register' hideNavBar></Scene>
            //         <Scene key="forgetPassword" component={ForgetPassword} title='Forget Password' hideNavBar></Scene>
            //         <Scene key="merchant" component={Merchant} hideBackImage title='Merchant'
            //             titleStyle={{ color: 'white' }}
            //             navigationBarStyle={{ backgroundColor: "#FFB74D" }}
            //             renderBackButton={() => (null)}></Scene>
            //         <Scene key="tabbar"
            //         activeTintColor={'#FB8C00'}
            //         inactiveTintColor={'#FFCC80'}
            //            tabs hideNavBar>
            //             <Scene key="merchantDetail"
            //                 component={MerchantDetail}
            //                 title={'Merchant Detail'}
            //                 hideNavBar
            //                 icon={TabIcon}
            //                 iconName={'food-fork-drink'}>
            //             </Scene>
            //             <Scene key="user"
            //                 component={User}
            //                 title={"User"}
            //                 hideNavBar
            //                 icon={TabIcon}
            //                 iconName={'account'}>
            //             </Scene>
            //         </Scene>
            //     </Scene>
            // </Router>
        );
    }
}
const styles = StyleSheet.create({

})