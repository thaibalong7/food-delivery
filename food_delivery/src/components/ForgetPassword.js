import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyle from '../theme'

export default class ForgetPassword extends Component {
    render() {
        return (
            <ImageBackground style={AppStyle.StyleForgetPassword.backgroundContainer}>
                <View style={AppStyle.StyleForgetPassword.textTitleContainer}>
                    <Text style={AppStyle.StyleForgetPassword.textTitle}>Forget Password</Text>
                </View>
                <View style={AppStyle.StyleForgetPassword.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleForgetPassword.input}
                        autoCapitalize = {'none'}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={AppStyle.StyleForgetPassword.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleForgetPassword.input}
                        autoCapitalize = {'none'}
                        placeholder={'New Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <View style={AppStyle.StyleForgetPassword.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleForgetPassword.input}
                        autoCapitalize = {'none'}
                        placeholder={'Confirm Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={AppStyle.StyleForgetPassword.btnResetPassword} >
                    <Text style={AppStyle.StyleForgetPassword.textResetPassword}>Reset Password</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={AppStyle.StyleForgetPassword.iconAngle} />
                </TouchableOpacity>
            </ImageBackground>
        )
    };
}