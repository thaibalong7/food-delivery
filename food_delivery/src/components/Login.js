import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity
} from 'react-native';
import bgloginImage from '../img/login_background.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width: WIDTH } = Dimensions.get('window');
export default class Login extends Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    {/* <Image source = {} style = {styles.logo}/> */}
                    <Text style={styles.logoText}>FOOD DELIVERY</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                    <Icon name={'user'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={styles.inputIcon} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                    <Icon name={'lock'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={styles.inputIcon} />
                    <TouchableOpacity style={styles.bntEye}>
                        <Icon name={'eye'} size={24} color={'rgba(0, 0, 0, 0.7)'}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewAcc}>
                    <TouchableOpacity >
                        <Text style={styles.textCreateAccount}>Create a account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.textForgetPassword}>Forget password</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin} >
                    <Text style={styles.textLogin}>Login</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(0, 0, 0, 0.7)'} style={styles.iconLogin} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#6699ff'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 5,
        opacity: 0.3
    },
    inputContainer: {
        marginTop: 10,
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
        backgroundColor: '#C6FF00',
        justifyContent: 'center',
        marginTop: 30
    },
    textLogin: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 16,
        marginLeft: 15,
        textAlign: 'left',
    },
    iconLogin: {
        position: 'absolute',
        top: 8,
        right: 20
    },
    viewAcc: {
        width: WIDTH - 70,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textCreateAccount: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 13,
    },
    textForgetPassword:{
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 13,
    }
});
