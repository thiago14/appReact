import { SET_FIELD, RESET_FORM } from "../actions"

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
        case RESET_FORM:
            return INITIAL_STATE
        default:
            return state
    }
}