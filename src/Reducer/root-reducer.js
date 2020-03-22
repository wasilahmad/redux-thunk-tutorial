import { combineReducers } from 'redux';
// reducers 
import reducer from './reducer';


const rootReducer = combineReducers({
    r1 : reducer 
});


export default rootReducer;
