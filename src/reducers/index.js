import {combineReducers} from 'redux'

//Reducer Dependencies
import item from './item'
import items from '/items'


export default combineReducers({
    item,
    items,
});