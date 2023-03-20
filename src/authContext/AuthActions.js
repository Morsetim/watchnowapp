export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => {
  return {
  type: "LOGIN_SUCCESS",
  payload: user,
}
};

export const loginFailure = (err) => {
  return {
    type: "LOGIN_FAILURE",
    payload: err
  }
};
//logout

export const logout = () => (dispatch) =>{ 
  localStorage.clear()
  dispatch ({
  type: "LOGOUT"
})

};
