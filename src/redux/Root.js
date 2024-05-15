import { combineReducers } from "redux";
import tourAsiaReducer from "./TourAsia/reducerTour";
import tourIranReducer from "./TourIran/reducerTour";
import tourEropaReducer from "./TourEropa/reducerTour";

const Root = combineReducers({
    tourAsia: tourAsiaReducer,
    tourIran:tourIranReducer,
    tourEropa:tourEropaReducer
})

export default Root;