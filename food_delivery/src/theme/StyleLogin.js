import {
    StyleSheet, Dimensions
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const StyleLogin = StyleSheet.create({
    backgroundContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffc299'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1,
        textShadowColor: 'rgba(128, 128, 128, 0.75)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 37,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    bntEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#EF6C00',
        justifyContent: 'center',
        marginTop: 5
    },
    textLogin: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 15,
        textAlign: 'left',
    },
    iconAngle: {
        position: 'absolute',
        top: 8,
        right: 20
    },
    viewAcc: {
        width: WIDTH - 70,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewErrNote: {
        marginTop: 25,
        //marginBottom: 5,
        flexDirection: 'row',
    },
    textErrNote: {
        color: 'red',
        fontSize: 13,
    },
    textCreateAccount: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 13,
    },
    textForgetPassword: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 13,
    }
});
export default StyleLogin;