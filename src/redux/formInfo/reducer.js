const initialStateForm = {
  formDetails: {
    fullName: "",
    age: 18,
    gender: "",
    country: "",
    region: "",
    avatarUrl: ""
  }
};

const formReducer = (state = initialStateForm, action) => {
  switch (action.type) {
    case "SAVE_CHARACTER_INFO":
      return {
        ...state,
        formDetails: {
          fullName: action.fullName,
          age: action.age,
          gender: action.gender,
          country: action.country,
          region: action.region,
          avatarUrl: action.avatarUrl
        }
      };
    case "DELETE_CHARACTER_INFO":
      return {
        ...state,
        formDetails: {
          fullName: "",
          age: 18,
          gender: "",
          country: "",
          region: "",
          avatarUrl: ""
        }
      };
    default:
      return state;
  }
};

export default formReducer;
