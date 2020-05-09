const initialState = {
  isLogged: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLogged: true
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};

export default userReducer;
