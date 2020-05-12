export const saveInfoAction = (firstName, lastName, age, gender, country, region) => ({
    type: "SAVE_CHARACTER_INFO"
});

export const deleteInfoAction = () => ({
    type: "DELETE_CHARACTER_INFO"
});