export const logout = (setUser, dispatch, setAuthFalse, clearUserDataAction) => {
  console.log("logout func work");
  localStorage.setItem("jwt", "");
  setUser("");
  dispatch(setAuthFalse());
  dispatch(clearUserDataAction());
};
