import React, { Component } from 'react';
import {
    StyleSheet, View,
    FlatList,
} from 'react-native';
import ItemOfListMerchant from './ItemOfListMerchant'
import AppStyle from '../../theme'
export default class Merchant extends Component {
    componentDidMount(){
    
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => <ItemOfListMerchant style={AppStyle.StyleMerchant.itemList} action={this.props.action}></ItemOfListMerchant>}
                />
            </View>
        )
    }
}