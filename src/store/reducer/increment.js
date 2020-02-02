import { stat } from "fs"
import * as actionType from '../action'

const initialState = {
    counter: 15
}

const increment = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + parseInt(action.value)
            };
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: parseInt(state.counter) + parseInt(action.value)
    //     }
    // }
    return state
}

export default increment