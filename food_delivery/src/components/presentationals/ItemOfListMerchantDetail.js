import React, { Component } from 'react';
import {
    StyleSheet, View,
    Dimensions, Text,
    Image,
    TouchableOpacity
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import food from '../../assets/img/food.png'
export default class ItemOfListMerchantDetail extends Component {
    render() {
        //console.log(this.props.data)
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.imgItem} source={(this.props.data.info.image === '' || this.props.data.info.image == null) ? food : { uri: this.props.data.info.image }}>
                </Image>
                <View style={styles.itemInfoContainer}>
                    <View>
                        <Text style={styles.textTitle} numberOfLines={2}>{this.props.data.info.name}</Text>
                        <Text style={styles.textDecription}>Decription of that food kkkk kkkk kkkkk kkkkk kkkkkk</Text>
                    </View>
                    <TouchableOpacity style={styles.textMoreContainer}>
                        <Text style={styles.textMore}>Add...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
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
        borderRadius: 8,
        marginLeft: 1,
        marginTop: 1,
        marginBottom: 1,
        height: WIDTH / 3 - 15,
        width: WIDTH / 3 - 15,
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
        color: '#FFA726',
        marginLeft: 2 * WIDTH / 3 - 70,
        marginRight: 0
    }
})
