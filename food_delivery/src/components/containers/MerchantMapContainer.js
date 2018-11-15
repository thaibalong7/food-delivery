import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import MerchantMap from './../presentationals/MerchantMap'
export default class Merchant extends Component {
   componentDidMount(){
   
   }
   render() {
       return (
           <View>
               <MerchantMap/>
           </View>
       )
   }
}