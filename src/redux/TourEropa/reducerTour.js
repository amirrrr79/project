import { SET_TOUR_EROPA } from "./ActionTour"

const initialState = {
    tourEropa: []
}

 const tourEropaReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_TOUR_EROPA:
            return {
                ...state,
                tourEropa: action.payload
            }
        default:
            return state
    }
}

export default tourEropaReducer