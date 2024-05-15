import { SET_TOUR_ASIA} from "./ActionTour"

const initialState = {
    tourAsia: []
}

 const tourAsiaReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_TOUR_ASIA:
            return {
                ...state,
                tourAsia: action.payload
            }

        default:
            return state
    }
}

export default tourAsiaReducer