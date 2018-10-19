import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import AppStyle from '../../theme'
//import food from '../../assets/img/demo_food.jpg'
export default class ItemOfListMerchant extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={AppStyle.StyleItemOfListMerchant.itemContainer} onPress={() => { this.props.action(this.props.data.info.id) }}>
                    <Image style={AppStyle.StyleItemOfListMerchant.imgItem} blurRadius={0.9} source={{uri: this.props.data.info.image}}></Image>
                    <View style={AppStyle.StyleItemOfListMerchant.absoluteView}>
                        <Text style={AppStyle.StyleItemOfListMerchant.textItem} numberOfLines={2}>{this.props.data.info.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}