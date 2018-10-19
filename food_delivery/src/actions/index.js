import { ADD_FOOD, DELETE_FOOD, EDIT_USER_PROFILE } from './types'


export const add_food = ({id}) =>{
    return {
        type: ADD_FOOD,
        payload: id
    }
}
export const delete_food = ({id}) =>{
    return {
        type: DELETE_FOOD,
        payload: id
    }
}