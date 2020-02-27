import {
  SET_THEME_DARK,
  SET_THEME_DEFAULT,
} from './actionTypes';

const createAction = (type, payload = null, error = false) => {
  const action = { type, error };
  if (payload) action.payload = payload;
  return action;
};


export const createSetThemeDark = () => createAction(SET_THEME_DARK);

export const createSetThemeDefault = () => createAction(SET_THEME_DEFAULT);
