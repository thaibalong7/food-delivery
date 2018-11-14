import React, { Component } from 'react';
import Merchant from '../presentationals/Merchant'
import axios from 'axios';
import apiConfig from '../../config/api'
import {
    BackHandler,
    AppState
} from 'react-native';
export default class MerchantContainer extends React.Component {
    //do some thing to get data
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentDidMount() {
        const url = apiConfig.getAllRestaurant + '/' + '20' + '&' + '1'
        axios.get(url).then(async (res) => {
            var restaurants = [];
            await res.data.data.map((element, index) => {
                restaurants.push({
                    key: index.toString(),
                    info: element.info
                })
            });
            this.setState({
                data: restaurants
            })
        }).catch(err => {

        });
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    handleBackPress = () => {
        BackHandler.exitApp();
        return true;
    }
    _handleAppStateChange = (nextAppState) => {

    }
    render() {
        return (
            <Merchant data={this.state.data} action={(restaurantID) => { this.props.navigation.push('TabBar', { restaurantID: restaurantID }) }}></Merchant>
        )
    }

}