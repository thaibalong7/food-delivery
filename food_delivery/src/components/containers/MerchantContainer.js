import React, { Component } from 'react';
import Merchant from '../presentationals/Merchant'
import axios from 'axios';
import apiConfig from '../../config/api'

export default class MerchantContainer extends React.Component {
    //do some thing to get data
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        // this.state = {
        //     data: [{ key: '1', decription: 'aaaaaaaaaaaaaaaaaa' },
        //     { key: '2', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '3', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '4', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '5', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '6', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
        //     { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },]
        // }
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
    }
    render() {
        return (
            <Merchant data={this.state.data} action={(restaurantID) => { this.props.navigation.push('TabBar', {restaurantID: restaurantID}) }}></Merchant>
        )
    }

}