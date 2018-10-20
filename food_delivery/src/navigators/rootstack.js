import Login from '../components/presentationals/Login'
import Register from '../components/presentationals/Register'
import ForgetPassword from '../components/presentationals/ForgetPassword';
import Merchant from '../components/containers/MerchantContainer';
import Basket from '../components/presentationals/Basket'
import { createStackNavigator } from 'react-navigation';
import TabBar from './tabbar';
import React from 'react';
import {
    TouchableOpacity, Text, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconBadge from 'react-native-icon-badge';
const basketButton = <TouchableOpacity>
    <IconBadge MainElement={
        <Icon style={{ marginRight: 20 }} name={'shopping-cart'} size={32} color={'white'}></Icon>
    }
        BadgeElement={
            <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{12}</Text>
        }
        IconBadgeStyle={
            {
                width: 12,
                height: 12,
                backgroundColor: '#DD2C00'
            }
        }
        Hidden={false}
    />
</TouchableOpacity>;

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
        screen: Merchant,
        navigationOptions: {
            title: 'Merchant',
            headerStyle: {
                backgroundColor: '#FF9800',
                height: 45
            },
            headerRight: basketButton,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    TabBar: {
        screen: TabBar,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FF9800',
                height: 45
            },
            headerRight: basketButton,
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