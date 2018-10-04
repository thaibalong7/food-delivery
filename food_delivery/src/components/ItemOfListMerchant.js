import React, { Component } from 'react';
import {
    StyleSheet, View,
    Dimensions, Text,
    Image,
    TouchableOpacity
} from 'react-native';
const { width: WIDTH,
    height: HEIGHT } = Dimensions.get('window');
import food from '../img/demo_food.jpg'
export default class ItemOfListMerchant extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.itemContainer}>
                    <Image style={styles.imgItem} blurRadius={0.9} source={food}></Image>
                    <View style={styles.absoluteView}>
                        <Text style={styles.textItem}>Name of store</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 5,
        flexDirection: 'row',
        marginLeft: 6,
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgItem: {
        marginLeft: 1,
        marginTop: 1,
        marginBottom: 1,
        width: WIDTH - 14,
        height: HEIGHT / 4,
    },
    absoluteView: {
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    textItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }

})

