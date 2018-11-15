import { CHANGE_VIEW } from '../actions/types'

const initialState = {
    isMapView: false
}

const merchantReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW: {
            //do something
            if (prevState.isMapView) {
                return {
                    ...prevState,
                    isMapView: false
                }
            }
            return {
                ...prevState,
                isMapView: true
            }
        };
        default:
            return prevState;
    }

}

export default merchantReducer;