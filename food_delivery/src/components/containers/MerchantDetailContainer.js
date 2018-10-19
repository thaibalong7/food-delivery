import React from 'react';
import MerchantDetail from '../presentationals/MerchantDetail'
import axios from 'axios';
import apiConfig from '../../config/api'

export default class MerchantDetailContainer extends React.Component {
    //do some thing to get data
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        const { navigation } = this.props;
        const url = apiConfig.getMenuOfRestaurant + '/' + navigation.getParam('restaurantID', -1)
        axios.get(url).then(async (res) => {
            var menu = [];
            await res.data.menu.map((element, index) => {

                menu.push({
                    key: index.toString(),
                    info: element
                })
            });
            this.setState({
                data: menu
            })
        }).catch(err => {

        });
    }
    render() {
        return (
            <MerchantDetail data={this.state.data} action={() => { }}></MerchantDetail>
        )
    }

}