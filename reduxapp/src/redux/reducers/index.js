import {combineReducers} from 'redux';

import ContactReducer from './ContactReducers';

export default combineReducers({
    contacts: ContactReducer
})