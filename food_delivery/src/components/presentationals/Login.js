import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput,
    TouchableOpacity,
    Image, AsyncStorage,
    ActivityIndicator
} from 'react-native';
import bgloginImage from '../../assets/img/food_background_02.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyle from '../../theme'
import axios from 'axios';
import apiConfig from '../../config/api'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            hidePassword: true,
            errNote: '',
            loading: false
        }
    }
    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {
        return (
            <ImageBackground source={bgloginImage} style={AppStyle.StyleLogin.backgroundContainer} blurRadius={2}>
                <View style={AppStyle.StyleLogin.logoContainer}>
                    {/* <Image source = {bgloginImage} style = {AppStyle.StyleLogin.logo} blurRadius={1}/> */}
                    <Text style={AppStyle.StyleLogin.logoText}>FOOD DELIVERY</Text>
                </View>
                <View style={AppStyle.StyleLogin.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleLogin.input}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ username: text, errNote: '' }) }}
                    />
                    <Icon name={'user'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={AppStyle.StyleLogin.inputIcon} />
                </View>

                <View style={AppStyle.StyleLogin.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleLogin.input}
                        autoCapitalize={'none'}
                        placeholder={'Password'}
                        secureTextEntry={this.state.hidePassword}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ password: text, errNote: '' }) }}
                    />
                    <Icon name={'lock'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={AppStyle.StyleLogin.inputIcon} />
                    <TouchableOpacity style={AppStyle.StyleLogin.bntEye} onPress={this.managePasswordVisibility}>
                        <Icon name={this.state.hidePassword ? 'eye' : 'eye-slash'} size={24} color={'rgba(0, 0, 0, 0.7)'}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={AppStyle.StyleLogin.viewAcc}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={AppStyle.StyleLogin.textCreateAccount}>Create a account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                        <Text style={AppStyle.StyleLogin.textForgetPassword}>Forget password</Text>
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleLogin.viewErrNote}>
                    <Text style={AppStyle.StyleLogin.textErrNote}>{this.state.errNote}</Text>
                    <ActivityIndicator size="small" color="#FF9800" animating={this.state.loading} />
                </View>
                <TouchableOpacity style={AppStyle.StyleLogin.btnLogin}
                    disabled={this.state.loading}
                    onPress={() => {
                        // this.setState({ errNote: '' });
                        // this.setState({ loading: true, });
                        // axios.post(apiConfig.login, {
                        //     email: this.state.username,
                        //     password: this.state.password
                        // }).then(res => {
                        //     //res.JSON();
                        //     //console.log(res);
                        //     this.setState({loading: false});
                        //     _storeData = async () => {
                        //         try {
                        //             await AsyncStorage.setItem('food_delivery_token', res.data.token);
                        //         } catch (error) {
                        //             // Error saving data
                        //         }
                        //     }
                        //     this.props.navigation.push('Merchant');
                        // }).catch(err => {
                        //     this.setState({loading: false});
                        //     this.setState({ errNote: err.response.data.msg })
                        // })
                        this.props.navigation.push('Merchant');
                    }}>
                    <Text style={AppStyle.StyleLogin.textLogin}>Login</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={AppStyle.StyleLogin.iconAngle} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
