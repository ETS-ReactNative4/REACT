import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from './ActionTypes';

// return a action object
export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        contact: contact
    }
}

// return a action object
export const removeContact = (email) => {
    return {
        type : REMOVE_CONTACT,
        email : email
    }
}