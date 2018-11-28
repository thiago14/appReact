import series from '../../series.json'
import { SET_SERIES } from '../actions'

export default function(state = series, action) {
    switch (action.type) {
        case SET_SERIES:
            return action.series
        default:
            return state
    }
}