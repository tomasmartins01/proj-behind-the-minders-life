const initialStateGame = {
  gameInfo: {
    startingYear: new Date().getFullYear(),
    isGameFinished: false,
    career: "",
    happiness: 70,
    bankBalance: 0,
    prevExperience: "",
    timestamps: {
      interviewJune: {
        isInterviewJuneFinished: false,
        characterPassedTheInterview: undefined
      },
      schoolSep: { isSchoolSeptemberFinished: false },
      schoolDec: { isSchoolDecemberFinished: false },
      schoolMar: { isSchoolMarchFinished: false },
      schoolJun: { isSchoolJuneFinished: false },

      minderaOneSep: { isMinderaFirstSepFinished: false },
      minderaOneDec: { isMinderaFirstDecFinished: false },
      minderaOneMar: { isMinderaFirstMarFinished: false },
      minderaOneJun: { isMinderaFirstJuneFinished: false },

      minderaTwoSep: { isMinderaSecondSepFinished: false },
      minderaTwoDec: { isMinderaSecondDecFinished: false },
      minderaTwoMar: { isMinderaSecondMarFinished: false },
      minderaTwoJun: { isMinderaSecondJuneFinished: false },

      minderaThreeSep: { isMinderaThirdSepFinished: false },
      minderaThreeDec: { isMinderaThirdDecFinished: false },
      minderaThreeMar: { isMinderaThirdMarFinished: false },
      minderaThreeMar: { isMinderaThirdJuneFinished: false },

      minderaFourSep: { isMinderaFourthSepFinished: false },
      minderaFourDec: { isMinderaFourthDecFinished: false },
      minderaFourMar: { isMinderaFourthMarFinished: false },
      minderaFourJun: { isMinderaFourthJuneFinished: false },

      minderaFourSep: { isMinderaFifthSepFinished: false },
      minderaFourDec: { isMinderaFifthDecFinished: false },
      minderaFourMar: { isMinderaFifthMarFinished: false },
      minderaFourJun: { isMinderaFifthJuneFinished: false }
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
