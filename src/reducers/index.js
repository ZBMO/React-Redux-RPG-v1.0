
import onEnemy from './onEnemy';
import Screens from './Screens';
import onChosen from './onChosen';
import { combineReducers } from 'redux'

export default combineReducers({
    onChosen,
    onEnemy,
    Screens,
})
