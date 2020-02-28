const initialState = {
    toggle2: false,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {
          ...state,
          toggle2: !state.toggle2,
        };
        case 'UPDATE':
            return {
              ...state,
              search: action.search,
              load: true,
            };
      default:
        return state;
    }
  };
  
  export default reducer;