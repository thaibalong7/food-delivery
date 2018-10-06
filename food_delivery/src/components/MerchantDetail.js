import React, { Component } from 'react';
import {
    StyleSheet, View,
    FlatList,
    Dimensions,
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import ItemOfListMerchantDetail from './ItemOfListMerchantDetail'

export default class MerchantDetail extends Component {
    render() {
        return (
            <View style={styles.merchantContainer}>
                <FlatList
                    data={[{ key:'1',decription: 'aaaaaaaaaaaaaaaaaa' }, 
                    { key:'2',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'3',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'4',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'5',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'6',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },
                    { key:'1',decription: 'bbbbbbbbbbbbbbbbbb' },]}
                    renderItem={({ item }) => <ItemOfListMerchantDetail style={styles.itemList}></ItemOfListMerchantDetail>}
                />
            </View>
        )
    };
};

const styles = StyleSheet.create({
    merchantContainer:{
        backgroundColor: 'floralwhite'
    },
    itemList:{
        marginTop: 10,
    }
})
