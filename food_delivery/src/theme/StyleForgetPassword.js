import {
    StyleSheet, Dimensions
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const StyleForgetPassword = StyleSheet.create({
    backgroundContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    textTitleContainer: {
        marginBottom: 50,
    },
    textTitle: {
        color: '#E65100',
        fontSize: 25,
        fontWeight: '500',
        opacity: 1,
        textShadowColor: 'rgba(255, 204, 128, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 20
    },
    inputContainer: {
        marginTop: 15,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 20,
        backgroundColor: 'rgba(255, 243, 224, 0.7)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25
    },
    btnResetPassword: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#EF6C00',
        justifyContent: 'center',
        marginTop: 35,
    },
    iconAngle: {
        position: 'absolute',
        top: 8,
        right: 20
    },
    textResetPassword: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 15,
        textAlign: 'left',
    },
});
export default StyleForgetPassword;