import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7702Reducer from '../features/EmailAuth7702/redux/reducers';
import CalendarView7701Reducer from '../features/CalendarView7701/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7702: EmailAuth7702Reducer,
CalendarView7701: CalendarView7701Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});