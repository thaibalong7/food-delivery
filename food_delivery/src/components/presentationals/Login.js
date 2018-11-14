import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput,
    TouchableOpacity,
    Image, AsyncStorage,
    ActivityIndicator,
} from 'react-native';
import bgloginImage from '../../assets/img/food_background_02.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyle from '../../theme'
import { connect } from 'react-redux'
import { authenticate } from './../../actions'
class Login extends Component {
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
    onLoginTouchUp = () => {
        const { authenticate } = this.props;
        this.setState({ errNote: '' });
        this.setState({ loading: true, });
        authenticate({
            email: this.state.username,
            password: this.state.password
        })
        this.setState({ loading: false });
    }
    componentDidMount() {
        const { isAuthenticated } = this.props;
        console.log('componentDidMount, isAuthenticated: ', isAuthenticated);
        if (isAuthenticated) {
            setTimeout(() => {
                //Actions.Merchant();
                this.props.navigation.push('Merchant');
            }, 10);
        }

    }
    componentWillReceiveProps(props) {
        const { isAuthenticated } = props;
        console.log('isAuthenticated: ', isAuthenticated);
        if (isAuthenticated) {
            setTimeout(() => {
                //Actions.Merchant();
                this.props.navigation.push('Merchant');
            }, 10);
        }
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
                    <Text style={AppStyle.StyleLogin.textErrNote}>{this.props.errNote}</Text>
                    <ActivityIndicator size="small" color="#FF9800" animating={this.props.isAuthenticating} />
                </View>
                <TouchableOpacity style={AppStyle.StyleLogin.btnLogin}
                    disabled={this.state.loading}
                    onPress={() => {
                        this.onLoginTouchUp()
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

                    }}>
                    <Text style={AppStyle.StyleLogin.textLogin}>Login</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={AppStyle.StyleLogin.iconAngle} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authenticationReducer.isAuthenticated,
    isAuthenticating: state.authenticationReducer.isAuthenticating,
    errNote: state.authenticationReducer.errNote,
    accessToken: state.authenticationReducer.accessToken,
})

const mapDispatchToProps = dispatch => ({
    authenticate: (data) => {
        dispatch(authenticate(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);