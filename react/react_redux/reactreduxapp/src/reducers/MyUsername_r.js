export default (state = "pankaj", action) => {
  if (action.type === "CHANGE_USERNAME") {
    return action.payload;
  } else {
    return state;
  }
};
