import {
  createSetThemeDefault,
  createSetThemeDark,
} from './actionsCreators';

export const setThemeDark = () => (dispatch) => dispatch(createSetThemeDefault());

export const setThemeDefault = () => (dispatch) => dispatch(createSetThemeDark());
