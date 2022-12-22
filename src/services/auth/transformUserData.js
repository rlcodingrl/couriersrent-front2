export const transformUserData = (result) => {
  let finalUserData = {};
  finalUserData.jwt = result.data.access_token;
  finalUserData.id = result.user._id;
  finalUserData.name = result.user.name;
  finalUserData.wallet = result.user.wallet;
  finalUserData.balance = result.user.balance;
  finalUserData.role = result.user.role;
  return finalUserData;
};
