import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { ChangeViewMerchant } from './../../actions'
class ChangeViewMerchantButton extends Component {
    onChangeViewPress = () => {
        this.props.changeView();
        this.props.navigation(this.props.isMapView);
    }
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity onPress={this.onChangeViewPress} >
                <Ionicons name={'ios-notifications-outline'}
                    style={{ marginRight: 20 }}
                    size={32} color={'white'} />
            </TouchableOpacity>
        )
    };
}
const mapStateToProps = state => ({
    isMapView: state.merchantReducer.isMapView
})
const mapDispatchToProps = dispatch => ({
    changeView: () => {
        dispatch(ChangeViewMerchant());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ChangeViewMerchantButton);