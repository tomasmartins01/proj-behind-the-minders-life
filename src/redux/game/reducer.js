const initialStateGame = {
  gameInfo: {
    startingYear: new Date().getFullYear(),
    isGameFinished: false,
    specialization: undefined,
    career: undefined,
    happiness: 70,
    bankBalance: 0,
    prevExperience: undefined,
    timestamps: {
      interviewJune: {
        isFinished: false,
        characterPassedTheInterview: undefined
      },
      schoolSep: {
        isFinished: false,
        differentRoute: undefined,
        wentToMinderaParty: undefined
      },
      schoolDec: {
        isFinished: false,
        quizNumberOfQuestions: 3,
        triedBackendQuiz: false,
        correctAnswersBE: 0,
        triedFrontendQuiz: false,
        correctAnswersFE: 0,
        triedMobileQuiz: false,
        correctAnswersMB: 0,
        wentToChristmasParty: undefined
      },
      schoolMar: {
        isFinished: false,
        choiceMade: undefined,
        projectPicked: undefined,
        languagePicked: undefined
      },
      schoolJun: { isFinished: false, presentationFeeling: undefined },

      minderaOneSep: {
        isFinished: false,
        optionAfterSchool: undefined,
        passedTheInterview: undefined,
        acceptedContract: undefined
      },
      minderaOneDec: {
        isFinished: false,
        partyOrProject: undefined,
        christmasPresent: undefined
      },
      minderaOneMar: { isFinished: false, dinnerFood: undefined },
      minderaOneJun: { isFinished: false, newProject: undefined },

      minderaTwoSep: { isFinished: false, birthdayAction: undefined },
      minderaTwoDec: { isFinished: false, tripDecision: undefined },
      minderaTwoMar: {
        isFinished: false,
        pcbrokeToDo: undefined,
        pcInformation: undefined
      },
      minderaTwoJun: { isFinished: false, wentToLanParty: undefined },

      minderaThreeSep: { isFinished: false, robberyAction: undefined },
      minderaThreeDec: { isFinished: false, giftDecision: undefined },
      minderaThreeMar: { isFinished: false },
      minderaThreeJun: {
        isFinished: false,
        vacationPlace: undefined,
        vacationMoney: undefined
      },

      minderaFourSep: { isFinished: false, newLanguageProject: undefined },
      minderaFourDec: { isFinished: false, doneWorkshop: undefined },
      minderaFourMar: { isFinished: false, minderaTechDay: undefined },
      minderaFourJun: { isFinished: false, surf: undefined },

      minderaFiveSep: {
        isFinished: false,
        hasAskedQuestion: undefined,
        helpTests: undefined,
        helpSeo: undefined
      },
      minderaFiveDec: { isFinished: false, gifts: undefined },
      minderaFiveMar: {
        isFinished: false,
        talkChoice: undefined,
        excuseText: undefined
      },
      minderaFiveJun: {
        isFinished: false,
        helpChoice: undefined,
        birthdayText: undefined
      }
    },
    skillsLevel: {
      socialSkills: 0,
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
        angularSkills: 0,
        reactjsSkills: 0,
        vueSkills: 0
      },
      mobile: {
        kotlinSkills: 0,
        dartSkills: 0,
        flutterSkills: 0,
        swiftSkills: 0,
        reactNativeSkills: 0
      }
    }
  }
};

const gameReducer = (state = initialStateGame, action) => {
  switch (action.type) {
    case "UPDATE_GAME_SPECIALZATION":
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          specialization: action.specialization
        }
      };
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
