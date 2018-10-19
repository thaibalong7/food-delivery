import React, { Component } from 'react';
import {
    StyleSheet, View,
    FlatList,
    Dimensions,
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import ItemOfListMerchantDetail from './ItemOfListMerchantDetail'
import AppStyle from '../../theme';

export default class MerchantDetail extends Component {
    render() {
        return (
            <View style={AppStyle.StyleMerchantDetail.merchantContainer}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => <ItemOfListMerchantDetail data={item} style={AppStyle.StyleMerchantDetail.itemList}></ItemOfListMerchantDetail>}
                />
            </View>
        )
    };
};