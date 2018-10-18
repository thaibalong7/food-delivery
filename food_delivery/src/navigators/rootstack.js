import Login from '../components/Login'
import Register from '../components/Register'
import ForgetPassword from '../components/ForgetPassword';
import Merchant from '../components/Merchant';
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
    TabBar: TabBar
},
    {
        initialRouteName: 'Login'
    }
);

export default RootStack;