import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

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
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'New Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.btnResetPassword} >
                    <Text style={styles.textResetPassword}>Reset Password</Text>
                    <Icon name={'angle-right'} size={26} color={'rgba(0, 0, 0, 0.7)'} style={styles.iconAngle} />
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
        backgroundColor: '#6699ff'
    },
    textTitleContainer: {
        marginBottom: 50,
    },
    textTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25
    },
    btnResetPassword: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#C6FF00',
        justifyContent: 'center',
        marginTop: 35,
    },
    iconAngle: {
        position: 'absolute',
        top: 8,
        right: 20
    },
    textResetPassword: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 15,
        textAlign: 'left',
    },
});