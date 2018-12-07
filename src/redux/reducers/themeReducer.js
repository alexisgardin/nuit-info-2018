import {THEME} from "../actions";

const defaultState = {
  theme: 'dark'
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
	case THEME:
	  return {
	    ...state,
		theme: action.payload
	  };
	default:
	  return state;
  }
};

export default themeReducer;
