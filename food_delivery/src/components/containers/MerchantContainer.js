import React, { Component } from 'react';
import Merchant from '../presentationals/Merchant'

export default class MerchantContainer extends React.Component {
    //do some thing to get data
    constructor(props) {
        super(props);
        this.state = {
            data: [{ key: '1', decription: 'aaaaaaaaaaaaaaaaaa' },
            { key: '2', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '3', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '4', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '5', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '6', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },
            { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },]
        }
    }
    render() {
        return (
            <Merchant data={this.state.data} action ={()=>{ this.props.navigation.push('TabBar')}}></Merchant>
        )
    }

}