const host = 'https://food-delivery-server.herokuapp.com';

const hrefAPI = {
    host: host,
    login: host + '/login',
    register: host + '/register',
    getAllRestaurant: host + '/restaurant/getAll',
    getMenuOfRestaurant: host + '/restaurant/getMenu'
}
export default hrefAPI;