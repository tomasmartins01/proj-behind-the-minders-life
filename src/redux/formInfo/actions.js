export const saveInfoAction = (
  fullName,
  age,
  gender,
  country,
  region,
  avatarUrl
) => ({
  type: "SAVE_CHARACTER_INFO",
  fullName,
  age,
  gender,
  country,
  region,
  avatarUrl
});

export const updateAgeAction = age => ({
  type: "UPDATE_CHARACTER_AGE",
  age
});

export const deleteInfoAction = () => ({
  type: "DELETE_CHARACTER_INFO"
});
