import * as actions from './actionTypes';

const initialState = {
  theme: 'default',
  headerBgColorType: 'transparent',
  homeBannerHeightEnd: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actions.SET_THEME_DARK: {
      return {
        ...state,
        theme: 'dark',
      };
    }
    case actions.SET_THEME_DEFAULT: {
      return {
        ...state,
        theme: 'default',
      };
    }
  }
};
