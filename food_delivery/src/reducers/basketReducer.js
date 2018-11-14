import { ADD_FOOD, DELETE_FOOD, EDIT_USER_PROFILE } from '../actions/types'

const initialState = {
    listFood: [], //list of food in basket
}

const basketReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ADD_FOOD: {
            //do something
            return { ...prevState }
        };
        case DELETE_FOOD: {
            return { ...prevState }
        };
        default:
            return prevState;
    }

}

export default basketReducer;