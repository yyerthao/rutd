import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import vetReducer from './vet.reducer';
import maladyReducer from './malady.reducer';
import vetMatchReducer from './vetMatch.reducer';
import incompleteMatchReducer from './incompleteMatch.reducer';
import percentageReducer from './percentage.reducer'
import vetSearchReducer from './vetSearch.reducer';
import compensationReducer from './compensation.reducer';
import emailReducer from './email.reducer';
import details from './details.reducer';
import resourceDetails from './resourceReducer.reducer';
import resourceReducer from './resource.reducer';
import resourceSearch from './resourceSearch.reducer';
import demographicReducer from './demographic.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  demographicReducer,
  vetReducer,
  vetMatchReducer,
  incompleteMatchReducer,
  maladyReducer,
  percentageReducer,
  vetSearchReducer,
  compensationReducer,
  resourceDetails,
  emailReducer,
  details,
  resourceReducer,
  resourceSearch,
});

export default rootReducer;
