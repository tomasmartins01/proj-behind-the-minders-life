const initialStateGame = {
  gameInfo: {
    startingYear: new Date().getFullYear(),
    isGameFinished: false,
    especialization: "",
    happiness: 70,
    bankBalance: 0,
    prevExperience: "",
    timestamps: {
      interviewJune: {
        isFinished: false,
        characterPassedTheInterview: undefined
      },
      schoolSep: { isFinished: false, differentRoute: undefined },
      schoolDec: {
        isFinished: false,
        triedBackendQuiz: false,
        triedFrontendQuiz: false,
        triedMobileQuiz: false
      },
      schoolMar: {
        isFinished: false,
        choiceMade: undefined,
        projectPicked: undefined
      },
      schoolJun: { isFinished: false, presentationFeeling: undefined },

      minderaOneSep: { isFinished: false },
      minderaOneDec: { isFinished: false },
      minderaOneMar: { isFinished: false },
      minderaOneJun: { isFinished: false },

      minderaTwoSep: { isFinished: false },
      minderaTwoDec: { isFinished: false },
      minderaTwoMar: { isFinished: false },
      minderaTwoJun: { isFinished: false },

      minderaThreeSep: { isFinished: false },
      minderaThreeDec: { isFinished: false },
      minderaThreeMar: { isFinished: false },
      minderaThreeJun: { isFinished: false },

      minderaFourSep: { isFinished: false },
      minderaFourDec: { isFinished: false },
      minderaFourMar: { isFinished: false },
      minderaFourJun: { isFinished: false },

      minderaFiveSep: { isFinished: false },
      minderaFiveDec: { isFinished: false },
      minderaFiveMar: { isFinished: false },
      minderaFiveJun: { isFinished: false }
    },
    skillsLevel: {
      socialSkills: 0,
      programmingSkills: 0,
      backend: {
        cplusplusSkills: 0,
        golangSkills: 0,
        javaSkills: 0,
        phpSkills: 0,
        pythonSkills: 0,
        rubySkills: 0,
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
    case "UPDATE_GAME_ESPECIALIZATION":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          especialization: action.especialization
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
