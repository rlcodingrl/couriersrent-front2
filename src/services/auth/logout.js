export const logout = (setUser, setIfAuthenticated) => {
  console.log("logout func work");
  localStorage.setItem("jwt", "");
  console.log(setUser);
  setUser("");
  setIfAuthenticated(false);
};
