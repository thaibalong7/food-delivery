import React, { Component } from 'react';
import {
    Dimensions,
} from 'react-native';
import MerchantMap from './../presentationals/MerchantMap'
import axios from 'axios';
import hostAPI from './../../config/api'
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 10.777970;
const LONGITUDE = 106.702847;
const LATITUDE_DELTA = 0.0522;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            listMerchant: [],
        }
    }
    onRegionChange = (region) => {
        //console.log(region)
        //this.setState({ region });
    }
    onChangeTextSearch = (text) => {
        console.log(text)
    }
    viewMerchantDetail = (restaurantID) => {
        console.log('view merchant detail', restaurantID)
        this.props.navigation.push('TabBar', { restaurantID: restaurantID })
    }
    componentDidMount() {
        axios.get(hostAPI.host + '/restaurant/nearMe/' + this.state.region.latitude + '&' + this.state.region.longitude)
            .then(rs => {
                this.setState({ listMerchant: rs.data })
            })
    }
    render() {
        console.log(this.state)
        return (
            <MerchantMap region={this.state.region}
                listMerchant={this.state.listMerchant}
                onRegionChange={this.onRegionChange}
                onChangeTextSearch={this.onChangeTextSearch}
                viewMerchantDetail={this.viewMerchantDetail}
            />
        )
    }
}