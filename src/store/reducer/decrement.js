import { stat } from "fs"
import * as actionType from '../action'

const initialState = {
    counter: 15
}

const decrement = (state = initialState, action) => {
    switch (action.type) {
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - parseInt(action.value)
            }
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: parseInt(state.counter) + parseInt(action.value)
    //     }
    // }
    return state
}

export default decrement