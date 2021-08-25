import {combineReducers} from 'redux';
import {reducer as creditReducer} from './credit/reducer';
import {reducer as pageReducer} from './page/reducer';

export const NameSpace = {
  CREDIT: 'CREDIT',
  PAGE: 'PAGE',
};

export const rootReducer = combineReducers({
  [NameSpace.CREDIT]: creditReducer,
  [NameSpace.PAGE]: pageReducer,
});
