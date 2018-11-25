export default function(dataModal = {}, action) {
  if(action.type === 'openModal') {
    let dataModalCopy = {...action}
    return dataModalCopy;
  } else {
    return dataModal;
  }

}
