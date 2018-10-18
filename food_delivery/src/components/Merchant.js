import React, { Component } from 'react';
import {
    StyleSheet, View,
    FlatList,
} from 'react-native';
import ItemOfListMerchant from './ItemOfListMerchant'

export default class Merchant extends Component {
    componentDidMount(){
        



    }
    render() {
        return (
            <View>
                <FlatList
                    data={[{ key: '1', decription: 'aaaaaaaaaaaaaaaaaa' },
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
                    { key: '1', decription: 'bbbbbbbbbbbbbbbbbb' },]}
                    renderItem={({ item }) => <ItemOfListMerchant style={styles.itemList} action={() => { this.props.navigation.push('TabBar') }}></ItemOfListMerchant>}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemList: {
        marginTop: 10,
    }
})