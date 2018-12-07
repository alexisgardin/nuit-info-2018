import {COORD, THEME} from "../actions";

const defaultState = {
    theme: 'light',
    coord: null
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
        case COORD:
	  	    return {
                ...state,
                coord: action.payload
            };
        default:
            return state;
    }
};

export default themeReducer;
