import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7717Saga from '../features/EmailAuth7717/redux/sagas';
import CalendarView7716Saga from '../features/CalendarView7716/redux/sagas';
import CalendarView7706Saga from '../features/CalendarView7706/redux/sagas';
import CalendarView7701Saga from '../features/CalendarView7701/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7717Saga,
CalendarView7716Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}