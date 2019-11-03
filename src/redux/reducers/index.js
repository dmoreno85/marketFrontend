import {combineReducers} from 'redux'

//Reducer Dependencies
import item from './item'
import detailItems from './detailItems'


export default combineReducers({
    item,
    detailItems,
});