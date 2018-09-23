import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <Text style={{ fontWeight: 'bold' }}>
                I am bold
                <Text style={{ color: 'red' }}>
                    and red jhgjgjfhgfhgfhgf
                    jhgjgjfhgfhgfhgf
                </Text>
            </Text>
        );
    }
}