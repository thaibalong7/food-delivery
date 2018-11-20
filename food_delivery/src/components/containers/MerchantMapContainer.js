import React, { Component } from 'react';
import {
    Dimensions,
} from 'react-native';
import MerchantMap from './../presentationals/MerchantMap'
import axios from 'axios';
import hostAPI from './../../config/api'
import { API_KEY, api_geocoding } from '../../config/googleAPI'
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
            address: 'Loadding ...'
        }
    }
    onRegionChange = (region) => {
        this.setState({
            address: 'Loadding ...'
        })
        this.setState({ region });
        axios.get(hostAPI.host + '/restaurant/nearMe/' + region.latitude + '&' + region.longitude)
            .then(rs => {
                this.setState({ listMerchant: rs.data })
            })
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
        axios.get(api_geocoding + 'latlng=' + region.latitude + ',' + region.longitude + '&key=' + API_KEY)
            .then(rs => {
                this.setState({
                    address: rs.data.results[0].formatted_address
                })
            })
            .catch(err => {
                this.setState({
                    address: 'Error API'
                })
            })
    }
    onChangeTextSearch = (text) => {
        console.log(text)
    }
    viewMerchantDetail = (restaurantID) => {
        console.log('view merchant detail', restaurantID)
        this.props.navigation.push('TabBar', { restaurantID: restaurantID })
    }
    // changeRegion = (latitude, longitude) => {
    //     const newRegion = {
    //         latitude: latitude,
    //         longitude: longitude,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA,
    //     }
    //     this.setState({
    //         region: newRegion
    //     })
    //     axios.get(api_geocoding + 'latlng=' + latitude + ',' + longitude + '&key=' + API_KEY)
    //         .then(rs => {
    //             console.log(rs)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    componentDidMount() {
        axios.get(hostAPI.host + '/restaurant/nearMe/' + this.state.region.latitude + '&' + this.state.region.longitude)
            .then(rs => {
                this.setState({ listMerchant: rs.data })
            })
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
        axios.get(api_geocoding + 'latlng=' + this.state.region.latitude + ',' + this.state.region.longitude + '&key=' + API_KEY)
            .then(rs => {
                this.setState({
                    address: rs.data.results[0].formatted_address
                })
            })
            .catch(err => {
                this.setState({
                    address: 'Error API'
                })
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
                changeRegion={this.changeRegion}
                address={this.state.address}
            />
        )
    }
}