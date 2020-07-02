import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7707Reducer from '../features/EmailAuth7707/redux/reducers';
import CalendarView7706Reducer from '../features/CalendarView7706/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7707: EmailAuth7707Reducer,
CalendarView7706: CalendarView7706Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});