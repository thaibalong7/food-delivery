import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import MapView, { Marker, ProviderPropType, Callout } from 'react-native-maps';
import { SearchBar } from 'react-native-elements'
import AppStyle from '../../theme'
import marker_this from '../../assets/img/marker_this.png'
import marker_food from '../../assets/img/marker_food.png'
import CalloutMarker from './/CalloutMarker'
Map.propTypes = {
    provider: ProviderPropType,
};
export default class MerchantMap extends Component {
    componentDidMount() {

    }

    onChangeTextSearch = (text) => {
        this.props.onChangeTextSearch(text);
    }
    onClearSearch = () => {
        console.log('search text is cleared')
    }
    render() {
        return (
            <View style={AppStyle.StyleMerchantMap.container}>

                <MapView
                    provider={this.props.provider}
                    style={AppStyle.StyleMerchantMap.map}
                    initialRegion={this.props.region}
                    onPress={e => console.log(e.nativeEvent)}
                    onRegionChange={
                        (region) => {
                            this.props.onRegionChange(region)
                        }
                    }
                >
                    {this.props.listMerchant.map((marker, i) => (
                        <Marker
                            key={i + 1}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.name}
                        >
                            <Image source={marker_food} style={{ width: 38, height: 38 }} />
                            <Callout onPress={() => {
                                this.props.viewMerchantDetail(marker.id)
                            }
                            }>
                                <CalloutMarker RESTAURANT={marker.RESTAURANT}></CalloutMarker>
                            </Callout>
                        </Marker>
                    ))}
                    <Marker
                        key={0}
                        coordinate={{
                            latitude: this.props.region.latitude,
                            longitude: this.props.region.longitude,
                        }}
                    >
                        <Image source={marker_this} style={{ width: 38, height: 38 }} />
                    </Marker>
                </MapView>
                <View style={AppStyle.StyleMerchantMap.searchBoxContainer}>
                    <SearchBar
                        lightTheme
                        //searchIcon={<CustomComponent />}
                        onChangeText={this.onChangeTextSearch}
                        onClear={this.onClearSearch}
                        clearIcon
                        containerStyle={AppStyle.StyleMerchantMap.searchContainer}
                        inputStyle={AppStyle.StyleMerchantMap.input}
                        placeholder='Type Here...' />
                    <Text style={AppStyle.StyleMerchantMap.textAddress}>this is address</Text>
                </View>
            </View>
        )
    }
}