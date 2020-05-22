const initialStateGame = {
  gameInfo: {
    startingYear: new Date().getFullYear(),
    isGameFinished: false,
    career: "",
    happiness: 70,
    bankBalance: 0,
    prevExperience: "",
    timestamps: { 
      isInterviewJuneFinished: false,
      isSchoolSeptemberFinished: false,
      isSchoolDecemberFinished: false,
      isSchoolMarchFinished: false,
      isSchoolJuneFinished: false,

      isMinderaFirstSepFinished: false,
      isMinderaFirstDecFinished: false,
      isMinderaFirstMarFinished: false,
      isMinderaFirstJuneFinished: false,

      isMinderaSecondSepFinished: false,
      isMinderaSecondDecFinished: false,
      isMinderaSecondMarFinished: false,
      isMinderaSecondJuneFinished: false,

      isMinderaThirdSepFinished: false,
      isMinderaThirdDecFinished: false,
      isMinderaThirdMarFinished: false,
      isMinderaThirdJuneFinished: false,

      isMinderaFourthSepFinished: false,
      isMinderaFourthDecFinished: false,
      isMinderaFourthMarFinished: false,
      isMinderaFourthJuneFinished: false,

      isMinderaFifthSepFinished: false,
      isMinderaFifthDecFinished: false,
      isMinderaFifthMarFinished: false,
      isMinderaFifthJuneFinished: false
    },
    skillsLevel: {
      socialSkills: 0,
      programmingSkills: 0,
      backend: {
        javaSkills: 0,
        rubySkills: 0,
        pythonSkills: 0,
        golangSkills: 0,
        sqlSkills: 0
      },
      frontend: {
        htmlSkills: 0,
        cssSkills: 0,
        jsSkills: 0,
        reactjsSkills: 0
      },
      mobile: {
        kotlinSkills: 0,
        swiftSkills: 0,
        reactNativeSkills: 0
      }
    }
  }
};

const gameReducer = (state = initialStateGame, action) => {
  switch (action.type) {
    case "UPDATE_GAME_CAREER":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          career: action.career
        }
      };
    case "UPDATE_GAME_HAPPINESS":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          happiness: action.happiness
        }
      };
    case "UPDATE_GAME_BANKBALANCE":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          bankBalance: action.bankBalance
        }
      };
    case "SET_GAME_PREVIOUS_EXPERIENCE":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          prevExperience: action.prevExperience
        }
      };
    case "UPDATE_GAME_TIMEBOX":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          timestamps: action.timestamps
        }
      };
    case "UPDATE_GAME_SKILLS":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          skillsLevel: action.skillsLevel
        }
      };
      case "START_GAME":
      return {
        ...state,
        gameInfo: { ...initialStateGame.gameInfo }
      };
    case "END_GAME":
      return {
        ...state,
        gameInfo: { ...state.gameInfo, isGameFinished: true }
      };
    default:
      return state;
  }
};

export default gameReducer;
