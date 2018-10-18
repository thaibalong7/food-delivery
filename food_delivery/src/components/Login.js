import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity,
    Image, AsyncStorage,
    ActivityIndicator
} from 'react-native';
import bgloginImage from '../img/food_background_02.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

const { width: WIDTH } = Dimensions.get('window');
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
            <ImageBackground source={bgloginImage} style={styles.backgroundContainer} blurRadius={2}>
                <View style={styles.logoContainer}>
                    {/* <Image source = {bgloginImage} style = {styles.logo} blurRadius={1}/> */}
                    <Text style={styles.logoText}>FOOD DELIVERY</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ username: text, errNote: '' }) }}
                    />
                    <Icon name={'user'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={styles.inputIcon} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        placeholder={'Password'}
                        secureTextEntry={this.state.hidePassword}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={text => { this.setState({ password: text, errNote: '' }) }}
                    />
                    <Icon name={'lock'} size={24} color={'rgba(0, 0, 0, 0.7)'} style={styles.inputIcon} />
                    <TouchableOpacity style={styles.bntEye} onPress={this.managePasswordVisibility}>
                        <Icon name={this.state.hidePassword ? 'eye' : 'eye-slash'} size={24} color={'rgba(0, 0, 0, 0.7)'}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewAcc}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.textCreateAccount}>Create a account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                        <Text style={styles.textForgetPassword}>Forget password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewErrNote}>
                    <Text style={styles.textErrNote}>{this.state.errNote}</Text>
                    <ActivityIndicator size="small" color="#FF9800" animating={this.state.loading} />
                </View>
                <TouchableOpacity style={styles.btnLogin}
                    onPress={() => {
                        // this.setState({ errNote: '' });
                        // this.setState({ loading: true, });
                        // axios.post('https://food-delivery-server.herokuapp.com/login', {
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
                    <Text style={styles.textLogin}>Login</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.iconAngle} />
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
