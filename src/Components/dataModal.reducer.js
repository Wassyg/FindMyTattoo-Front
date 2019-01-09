export default function(dataModal = {}, action) {
  if(action.type === 'openModal') {
    let dataModalCopy = {...action}
    return dataModalCopy;
  } else if (action.type === 'closeModal') {
    let dataModalCopy2 = {...action}
    return dataModalCopy2;
  } else if (action.type === 'addTattooToFav'){
    let dataModalCopy3 = {...action}
    return dataModalCopy3
  } else {
    return dataModal;
  }

}
