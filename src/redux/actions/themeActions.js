import {COORD, THEME} from "./index";

export const themes = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const setTheme = theme => ({
    type: THEME,
    payload: theme
});

export const setCoord = coord => ({
    type: COORD,
    payload: coord
});