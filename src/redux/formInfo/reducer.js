const initialState = {
  firstName: "",
  lastName: "",
  age: 18,
  gender: "",
  country: "",
  region: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CHARACTER_INFO":
      return {
        ...state,
        firstName,
        lastName,
        age,
        gender,
        country,
        region
      };
    case "DELETE_CHARACTER_INFO":
      return {
        ...state,
        firstName: "",
        lastName: "",
        age: 18,
        gender: "",
        country: "",
        region: ""
      };
    default:
      return state;
  }
};

export default formReducer;
