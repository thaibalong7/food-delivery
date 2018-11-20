import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import AppStyle from '../../theme'
import { strings } from '../../../localization/i18n'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            errNote: '',
            loading: false
        }
    }
    render() {
        return (
            <ImageBackground style={AppStyle.StyleRegister.backgroundContainer}>
                <View style={AppStyle.StyleRegister.textTitleContainer}>
                    <Text style={AppStyle.StyleRegister.textTitle}>{strings('Register')}</Text>
                </View>
                {/* <View style={AppStyle.StyleRegister.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleRegister.input}
                        autoCapitalize = {'none'}
                        placeholder={'Full Name'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View> */}
                <View style={AppStyle.StyleRegister.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleRegister.input}
                        autoCapitalize={'none'}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ username: text, errNote: '' }) }}
                    />
                </View>
                <View style={AppStyle.StyleRegister.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleRegister.input}
                        autoCapitalize={'none'}
                        placeholder={strings('Password')}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={text => { this.setState({ password: text, errNote: '' }) }}
                    />
                </View>
                <View style={AppStyle.StyleRegister.inputContainer}>
                    <TextInput
                        style={AppStyle.StyleRegister.input}
                        autoCapitalize={'none'}
                        placeholder={strings('Confirm_password')}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={text => {
                            this.setState({
                                confirmPassword: text,
                                errNote: ''
                            })
                        }}
                    />
                </View>

                <View style={AppStyle.StyleRegister.viewErrNote}>
                    <Text style={AppStyle.StyleRegister.textErrNote}>{this.state.errNote}</Text>
                    <ActivityIndicator size="small" color="#FF9800" animating={this.state.loading} />
                </View>
                <TouchableOpacity style={AppStyle.StyleRegister.btnRegister}
                    disabled={this.state.loading}
                    onPress={() => {
                        this.setState({ errNote: '' });
                        this.setState({ loading: true, });
                        if (this.state.password.localeCompare(this.state.confirmPassword) === 0) {
                            axios.post('https://food-delivery-server.herokuapp.com/register', {
                                email: this.state.username,
                                password: this.state.password
                            }).then(res => {
                                //res.JSON();
                                this.setState({ loading: false });
                                Alert.alert(
                                    'Confirm Email',
                                    'Please check your email to confirm',
                                    [
                                        { text: 'OK', onPress: () => this.props.navigation.goBack() } //quay về màn hình login },
                                    ],
                                    { cancelable: false }
                                )

                            }).catch(err => {
                                this.setState({ loading: false });
                                this.setState({ errNote: err.response.data.msg })
                            })
                        }
                        else {
                            this.setState({ loading: false });
                            this.setState({ errNote: 'Confirm password not right' })
                        }
                    }}>
                    <Text style={AppStyle.StyleRegister.textRegister}>{strings('Register')}</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={AppStyle.StyleRegister.iconAngle} />
                </TouchableOpacity>
                <View style={AppStyle.StyleRegister.loginHere}>
                    <Text style={AppStyle.StyleRegister.textAlready}>{strings('Already_a_member')}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={AppStyle.StyleRegister.textLoginHere}>{strings('Login')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
