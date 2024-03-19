const initialState = {
  darkMode: false,
};

const toogle_theme = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_THEME": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default toogle_theme;
