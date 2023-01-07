export const logout = (setUser, dispatch, setAuthFalse) => {
  console.log("logout func work");
  localStorage.setItem("jwt", "");
  console.log(setUser);
  setUser("");
  dispatch(setAuthFalse());
};
