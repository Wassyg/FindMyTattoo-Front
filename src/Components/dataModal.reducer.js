export default function(dataModal = {}, action) {
  if(action.type === 'openModal') {
    let dataModalCopy = {...action}
    console.log('reducer', dataModalCopy);
    return dataModalCopy;
  } else {
    return dataModal;
  }

}
