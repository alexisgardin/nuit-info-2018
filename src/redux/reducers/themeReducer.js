import {THEME} from "../actions";

const defaultState = {
  theme: 'light'
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
	case THEME:
	  console.log('NEW THEME -> ' + action.payload);
	  const newState = {
		...state,
		theme: action.payload
	  };

	  console.log(newState);
	  return newState;
	default:
	  return state;
  }
};

export default themeReducer;
