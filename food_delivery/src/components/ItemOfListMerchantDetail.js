import React, { Component } from 'react';
import {
    StyleSheet, View,
    Dimensions, Text,
    Image,
    TouchableOpacity
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import food from '../img/demo_food.jpg'
export default class ItemOfListMerchantDetail extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.imgItem} source={food}>
                </Image>
                <View style={styles.itemInfoContainer}>
                    <View>
                        <Text style={styles.textTitle}>Name of food</Text>
                        <Text style={styles.textDecription}>Decription of that food kkkkk</Text>
                    </View>
                    <TouchableOpacity style={styles.c}>
                        <Text style={styles.textMore}>More...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
};

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
    },
    imgItem: {
        marginLeft: 1,
        marginTop: 1,
        marginBottom: 1,
        height: WIDTH / 3 - 10,
        width: WIDTH / 3 - 10,
    },
    itemInfoContainer: {
        paddingLeft: 4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 2 * WIDTH / 3
    },
    textTitle: {
        fontWeight: 'bold'
    },
    textDecription: {
        marginTop: 2
    },
    textMoreContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    textMore: {
        color: 'blue',
        marginLeft: 2 * WIDTH / 3 - 70,
        marginRight: 0
    }
})
