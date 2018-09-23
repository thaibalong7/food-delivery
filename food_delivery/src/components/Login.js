import React, { Component } from 'react';
import {
    StyleSheet, View,
    Text, ImageBackground,
    TextInput, Dimensions,
    TouchableOpacity
} from 'react-native';
import bgloginImage from '../img/login_background.jpg'
//import { Icon } from 'react-native-elements'

const { width: WIDTH } = Dimensions.get('window');
export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={bgloginImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    {/* <Image source = {} style = {styles.logo}/> */}
                    <Text style={styles.logoText}>FOOD DELIVERY</Text>
                </View>
                <View style={styles.inputContainer}>
                    {/* <Icon name={'md-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} /> */}
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    {/* <Icon name = {'md-person'} size = {28} color = {'rgba(255, 255, 255, 0.7)'} style = {styles.inputIcon}/> */}
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity style={styles.bntEye}>
                        {/* <Icon>size = {26} color= {'red'}></Icon> */}
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
        width: '100%',
        height: '100%',
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
        paddingLeft: 25,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    bntEye: {
        position: 'absolute',
        top: 10,
        right: 37
    }
});
