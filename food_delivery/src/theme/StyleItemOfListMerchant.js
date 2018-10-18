import {
    StyleSheet, Dimensions,
} from 'react-native';
const { width: WIDTH,
    height: HEIGHT } = Dimensions.get('window');
const StyleItemOfListMerchant = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderRadius: 5,
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
        borderRadius: 5,
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
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }

});
export default StyleItemOfListMerchant;
