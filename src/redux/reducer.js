const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state + 1;
    default:
      return state;
  }
};
export default reducer;
