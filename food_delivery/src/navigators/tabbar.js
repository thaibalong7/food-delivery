import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import MerchantDetail from '../components/containers/MerchantDetailContainer';
import User from '../components/presentationals/User'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { strings } from '../../localization/i18n'
const TabBar = createBottomTabNavigator({
    MerchantDetail: {
        screen: MerchantDetail,
        navigationOptions: {
            tabBarLabel: strings('MerchantDetail'),
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: strings('User'),
        }
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'MerchantDetail') {
                    //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    iconName = 'food-fork-drink'
                } else if (routeName === 'User') {
                    //iconName = `ios-options${focused ? '' : '-outline'}`;
                    iconName = 'account';
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#F57C00',
            inactiveTintColor: 'gray',
        },
    }
)

export default TabBar;