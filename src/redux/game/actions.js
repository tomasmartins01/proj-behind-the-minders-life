export const updateEspecializationAction = especialization => ({
  type: "UPDATE_GAME_ESPECIALIZATION",
  especialization
});

export const updateHappinessAction = happiness => ({
  type: "UPDATE_GAME_HAPPINESS",
  happiness
});

export const updateBankBalanceAction = bankBalance => ({
  type: "UPDATE_GAME_BANKBALANCE",
  bankBalance
});

export const setPrevExperienceAction = prevExperience => ({
  type: "SET_GAME_PREVIOUS_EXPERIENCE",
  prevExperience
});

export const updateTimeBoxAction = timestamps => ({
  type: "UPDATE_GAME_TIMEBOX",
  timestamps
});

export const updateSkillsAction = skillsLevel => ({
  type: "UPDATE_GAME_SKILLS",
  skillsLevel
});

export const startGameAction = () => ({
  type: "START_GAME"
});

export const endGameAction = () => ({
  type: "END_GAME"
});
