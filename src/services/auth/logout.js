export const logout = (dispatch, setAuthFalse, clearUserDataAction) => {
  // console.log("logout func work");
  localStorage.setItem("jwt", "");
  dispatch(setAuthFalse());
  dispatch(clearUserDataAction());
};
