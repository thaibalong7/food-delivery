import Login from '../components/presentationals/Login'
import Register from '../components/presentationals/Register'
import ForgetPassword from '../components/presentationals/ForgetPassword';
import Merchant from '../components/containers/MerchantContainer';
import Basket from '../components/presentationals/Basket'
import { createStackNavigator } from 'react-navigation';
import TabBar from './tabbar';
import switchMerchant from './switchMerchant'
import BasketButton from '../components/containers/BasketButtonContainer'
import ChangeViewMerchantButton from '../components/presentationals/ChangeViewMerchantButton'
// const basketButton = <TouchableOpacity>
//     <IconBadge MainElement={
//         <Icon style={{ marginRight: 20 }} name={'shopping-cart'} size={32} color={'white'}></Icon>
//     }
//         BadgeElement={
//             <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{12}</Text>
//         }
//         IconBadgeStyle={
//             {
//                 width: 12,
//                 height: 12,
//                 backgroundColor: '#DD2C00'
//             }
//         }
//         Hidden={false}
//     />
// </TouchableOpacity>;

import React from 'react';

onChangeView = (navigation, isMapView) => {
    if (isMapView) {
        navigation.navigate('MerchantView')
    }
    else { 
        navigation.navigate('MerchantMapView')
    }
}

const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    ForgetPassword: {
        screen: ForgetPassword,
        navigationOptions: {
            header: null
        }
    },
    Merchant: {
        screen: switchMerchant,
        navigationOptions: ({ navigation }) => ({
            title: 'Merchant',
            headerStyle: {
                backgroundColor: '#FF9800',
                height: 45
            },
            headerRight: <ChangeViewMerchantButton
                navigation={(isMapView) => { onChangeView(navigation, isMapView) }}>
            </ChangeViewMerchantButton>,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }),
    },
    TabBar: {
        screen: TabBar,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FF9800',
                height: 45
            },
            headerRight: BasketButton,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    Basket: {
        screen: Basket,
    }
},
    {
        initialRouteName: 'Login'
    }
);

export default RootStack;