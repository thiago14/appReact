import {
    SET_FIELD,
    RESET_FORM,
    SERIE_SAVED_SUCCESS,
    SET_FORM_EDIT_SERIE
} from "../actions"

const INITIAL_STATE = {
    id: null,
    img: '',
    rate: 0,
    title: '',
    gender: 'Policial',
    description: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FIELD:
            const newState = {...state}
            newState[action.field] = action.value
            return newState
        case SET_FORM_EDIT_SERIE:
            return action.serie
        case SERIE_SAVED_SUCCESS:
        case RESET_FORM:
            return INITIAL_STATE
        default:
            return state
    }
}