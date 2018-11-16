import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconBadge from 'react-native-icon-badge';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
class basketButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <IconBadge MainElement={
                    <Icon style={{ marginRight: 20 }} name={'shopping-cart'} size={32} color={'white'}></Icon>
                }
                    BadgeElement={
                        <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{this.props.BadgeCount}</Text>
                    }
                    IconBadgeStyle={
                        {
                            width: 12,
                            height: 12,
                            backgroundColor: '#DD2C00'
                        }
                    }
                    Hidden={this.props.BadgeCount == 0}
                />
            </TouchableOpacity>
        )
    };
}

//map this component to store in here ...
export default connect(null, null)(basketButton)