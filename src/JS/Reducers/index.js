import {combineReducers} from 'redux';
import movieReducer from './listMovies';

const rootReducer = combineReducers({movieReducer})

export default rootReducer