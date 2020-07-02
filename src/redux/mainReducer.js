import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7717Reducer from '../features/EmailAuth7717/redux/reducers';
import CalendarView7716Reducer from '../features/CalendarView7716/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7717: EmailAuth7717Reducer,
CalendarView7716: CalendarView7716Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});