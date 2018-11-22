export default function(user = {}, action) {
  if(action.type === 'signup') {
      return action.userSignUp;
  } else if (action.type === 'signin') {
      return action.userSignIn;
      console.log("user depuis le reducer", action.userSignIn);
  } else {
    return user;
  }

}
