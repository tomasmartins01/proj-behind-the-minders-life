export const updateCarrerAction = career => ({
  type: "UPDATE_GAME_CAReER",
  career
});

export const updateHappinessAction = happiness => ({
  type: "UPDATE_GAME_HAPPINESS",
  happiness
});

export const updateBankBalanceAction = bankBalance => ({
  type: "UPDATE_GAME_BANKBALANCE",
  bankBalance
});

export const setPrevExperience = prevExperience => ({
  type: "SET_GAME_PREVIOUS_EXPERIENCE",
  prevExperience
});

export const updateTimeBoxAction = timestamps => ({
  type: "UPDATE_GAME_TIMEBOX",
  timestamps
});

export const updateSkillsAction = skillsLevel => ({
  type: "UPDATE_GAME_SKILLS",
  skillsLevel: {
    socialSkills,
    programmingSkills,
    backend: {
      javaSkills,
      rubySkills,
      pythonSkills,
      golangSkills,
      sqlSkills
    },
    frontend: {
      htmlSkills,
      cssSkills,
      jsSkills,
      reactjsSkills
    },
    mobile: {
      kotlinSkills,
      swiftSkills,
      reactNativeSkills
    }
  }
});

export const startGameAction = () => ({
  type: "START_GAME"
});

export const endGameAction = () => ({
  type: "END_GAME"
});
