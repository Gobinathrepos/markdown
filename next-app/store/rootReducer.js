import {combineReducers} from 'redux';
import eventReducer from '../pages/redux/Reducer';

const rootReducer = combineReducers({
    event: eventReducer
})

export default rootReducer;
