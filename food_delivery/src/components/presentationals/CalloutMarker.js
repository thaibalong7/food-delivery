import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const { width } = Dimensions.get('window');

class CalloutMarker extends Component {
    render() {
        return (
            <View style={styles.calloutComponent}>
                <Image source={{ uri: this.props.RESTAURANT.image }} style={styles.imageView}></Image>
                <View style={styles.infoContainer}>
                    <Text>
                        {this.props.RESTAURANT.name}
                    </Text>
                </View>
                {/* <TouchableOpacity onPress={this.props.viewMerchantDetail} style={styles.iconContainer}>
                    <Icon name={'heart-o'} size={18} color={'orange'}></Icon>
                </TouchableOpacity> */}
            </View>)
    }


}

export default CalloutMarker;

const styles = StyleSheet.create({
    calloutComponent: {
        flexDirection: 'row',
        width: width - 50,
        height: 50,
        borderRadius: 8,
    },
    imageView: {
        width: 47,
        height: 47,
        borderRadius: 8,
    },
    infoContainer: {
        width: width - 50 - 45,
        justifyContent: 'space-between',
        paddingLeft: 2
    },
    iconContainer: {
        width: 35,
        height: 35,
    }
})