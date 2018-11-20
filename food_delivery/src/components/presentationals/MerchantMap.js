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
    constructor(props) {
        super(props)
        this.state = {
            countChangeRegion: 0
        }
    }
    componentDidMount() {

    }

    onChangeTextSearch = (text) => {
        this.props.onChangeTextSearch(text);
    }
    onClearSearch = () => {
        console.log('search text is cleared')
    }
    // debounce = (region, func, wait) => {
    //     var timeout;
    //     console.log('set ... region')
    //     return function () {
    //         let executeFunc = function () {
    //             func(region);
    //             console.log('set region')
    //         };
    //         clearTimeout(timeout);
    //         timeout = setTimeout(executeFunc, wait);
    //     };
    // };
    // setNewRegion = debounce(region)
    render() {
        return (
            <View style={AppStyle.StyleMerchantMap.container}>
                <MapView
                    provider={this.props.provider}
                    style={AppStyle.StyleMerchantMap.map}
                    initialRegion={this.props.region}
                    onPress={(e) => {
                        console.log(e.nativeEvent)
                        //this.props.changeRegion(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)
                    }}
                    onRegionChange={
                        (region) => {
                            // console.log(region)
                            // const setNewRegion = this.debounce(
                            //     region,
                            //     (region) => { this.props.onRegionChange(region) },
                            //     1000
                            // );
                            // setNewRegion();
                            this.setState({
                                countChangeRegion: this.state.countChangeRegion + 1
                            })
                            if (this.state.countChangeRegion === 20) {
                                this.props.onRegionChange(region);
                                this.setState({
                                    countChangeRegion: 0
                                })
                            }
                        }
                    }
                //onPoiClick={(e) => { this.props.changeRegion(e.coordinate.latitude, e.coordinate.longitude) }}
                >
                    {
                        this.props.listMerchant.map((marker, i) => (
                            <Marker
                                key={i + 1}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                title={marker.name}>
                                <Image source={marker_food} style={{ width: 38, height: 38 }} />
                                <Callout onPress={() => {
                                    this.props.viewMerchantDetail(marker.id)
                                }}>
                                    <CalloutMarker RESTAURANT={marker.RESTAURANT}></CalloutMarker>
                                </Callout>
                            </Marker>
                        ))
                    }
                    <Marker
                        key={0}
                        coordinate={{
                            latitude: this.props.region.latitude,
                            longitude: this.props.region.longitude,
                        }}>
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
                    <Text style={AppStyle.StyleMerchantMap.textAddress} numberOfLines={1}>{this.props.address}</Text>
                </View>
            </View>
        )
    }
}