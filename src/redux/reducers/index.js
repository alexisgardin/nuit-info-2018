import {combineReducers} from 'redux'
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  themeReducer: themeReducer
});

export default rootReducer;
