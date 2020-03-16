const initialState = {
  toggle1: false,
  toggle2: false,
  toggle3: false,
  toggle4: false,
  toggle5: false,
  search: '',
  load: false,
  isDoctor: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE1':
      return {
        ...state,
        toggle1: !state.toggle1,
      };
    case 'TOGGLE2':
      return {
        ...state,
        toggle2: !state.toggle2,
      };
    case 'TOGGLE3':
      return {
        ...state,
        toggle3: !state.toggle3,
      };
    case 'TOGGLE4':
      return {
        ...state,
        toggle4: !state.toggle4,
      };
    case 'TOGGLE5':
      return {
        ...state,
        toggle5: !state.toggle5,
      };
    case 'UPDATE':
      return {
        ...state,
        search: action.search,
      };
    case 'LOAD':
      return {
        ...state,
        load: action.load
      };
    case 'TOGGLE_DOCTOR':
      return {
        ...state,
        isDoctor: !state.isDoctor
      };
    default:
      return state;
  }
};

export default reducer;