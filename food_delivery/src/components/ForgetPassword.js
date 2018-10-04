import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import background from '../img/backgrount_orange.jpg'
const { width: WIDTH } = Dimensions.get('window');

export default class ForgetPassword extends Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundContainer}>
                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Forget Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize = {'none'}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize = {'none'}
                        placeholder={'New Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize = {'none'}
                        placeholder={'Confirm Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.btnResetPassword} >
                    <Text style={styles.textResetPassword}>Reset Password</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.iconAngle} />
                </TouchableOpacity>
            </ImageBackground>
        )
    };
}

const styles = StyleSheet.create({
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