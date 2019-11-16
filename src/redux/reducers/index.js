import {
    combineReducers
} from 'redux'

//Reducer Dependencies
import {item} from './items'
import {userToken} from './user'



export default combineReducers({
    item,
    userToken,
});