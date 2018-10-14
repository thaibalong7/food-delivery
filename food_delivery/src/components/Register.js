import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const { width: WIDTH } = Dimensions.get('window');

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
            <ImageBackground style={styles.backgroundContainer}>
                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Register</Text>
                </View>
                {/* <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize = {'none'}
                        placeholder={'Full Name'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View> */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ username: text,  errNote: '' }) }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        placeholder={'Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={text => { this.setState({ password: text, errNote: '' }) }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        placeholder={'Confirm Password'}
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

                <View style={styles.viewErrNote}>
                    <Text style={styles.textErrNote}>{this.state.errNote}</Text>
                    <ActivityIndicator size="small" color="#FF9800" animating={this.state.loading} />
                </View>
                <TouchableOpacity style={styles.btnRegister}
                    onPress={() => {
                        this.setState({errNote: ''});
                        this.setState({loading: true, });
                        if (this.state.password.localeCompare(this.state.confirmPassword) === 0) {
                            axios.post('https://food-delivery-server.herokuapp.com/register', {
                                email: this.state.username,
                                password: this.state.password
                            }).then(res => {
                                //res.JSON();
                                this.setState({loading: false});
                                Alert.alert(
                                    'Confirm Email',
                                    'Please check your email to confirm',
                                    [
                                        { text: 'OK', onPress: () => Actions.pop() } //quay về màn hình login },
                                    ],
                                    { cancelable: false }
                                )

                            }).catch(err => {
                                this.setState({loading: false});
                                this.setState({ errNote: err.response.data.msg })
                            })
                        }
                        else {
                            this.setState({loading: false});
                            this.setState({ errNote: 'Confirm password not right' })
                        }
                    }}>
                    <Text style={styles.textRegister}>Register</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.iconAngle} />
                </TouchableOpacity>
                <View style={styles.loginHere}>
                    <Text style={styles.textAlready}>Already a member ? </Text>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Text style={styles.textLoginHere}>Login here</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
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
        backgroundColor: 'rgba(255, 243, 224, 0.9)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25
    },
    viewErrNote: {
        marginTop: 30,
        //marginBottom: 5,
        flexDirection: 'row',
    },
    textErrNote: {
        color: 'red',
        fontSize: 13,
    },
    btnRegister: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#EF6C00',
        justifyContent: 'center',
        marginTop: 5,
    },
    iconAngle: {
        position: 'absolute',
        top: 8,
        right: 20
    },
    textRegister: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 15,
        textAlign: 'left',
    },
    loginHere: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    textAlready: {
        fontSize: 12
    },
    textLoginHere: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFA726'
    },

});
