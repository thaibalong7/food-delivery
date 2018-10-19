import Login from '../components/presentationals/Login'
import Register from '../components/presentationals/Register'
import ForgetPassword from '../components/presentationals/ForgetPassword';
import Merchant from '../components/containers/MerchantContainer';
import { createStackNavigator } from 'react-navigation';
import TabBar from './tabbar';
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
            },
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
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
},
    {
        initialRouteName: 'Login'
    }
);

export default RootStack;