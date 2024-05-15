import { SET_TOUR_IRAN } from "./ActionTour"

const initialState = {
    tourIran: []
}

 const tourIranReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_TOUR_IRAN:
            return {
                ...state,
                tourIran: action.payload
            }
        default:
            return state
    }
}

export default tourIranReducer