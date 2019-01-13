export default function(user = {}, action) {
  if(action.type === 'signup') {
    return action.userSignUp;
  } else if (action.type === 'signin') {
    return action.userSignIn;
  } else if (action.type === 'addTattooToFav') {
    return action.userWithFavTattoo;
  } else if (action.type === 'deleteTattooFromFav') {
    return action.userWithoutFavTattoo;
  } else if (action.type === 'addArtistToFav') {
    return action.userWithFavArtist;
  } else if (action.type === 'deleteArtistFromFav') {
    return action.userWithoutFavArtist;
  } else {
    return user;
  }

}
