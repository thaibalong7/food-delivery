import { addNavigationHelpers, createSwitchNavigator } from 'react-navigation';

import Merchant from '../components/containers/MerchantContainer';
import MerchantMapContainer from '../components/containers/MerchantMapContainer';

const switchMerchant = createSwitchNavigator({
    MerchantView: {
        screen: Merchant
    },
    MerchantMapView: {
        screen: MerchantMapContainer,
    }
},
    {
        initialRouteName: 'MerchantView'
    })

export default switchMerchant;
  