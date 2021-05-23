export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const logUser = () => {
  return {
    type: "IS_LOGGED_IN",
  };
};

export const addMovies = (data) => {
  return {
    type: "ADD_MOVIES",
    payload: data
  }
}