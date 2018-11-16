import {
    StyleSheet, Dimensions
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const StyleMerchantMap = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBoxContainer: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    searchContainer: {
        width: WIDTH,
    },
    input: {
        borderRadius: 25,
        fontSize: 14,
    },
    textAddress: { 
        backgroundColor: '#ffe0cc',
        textAlign: 'center'
    }
})

export default StyleMerchantMap;