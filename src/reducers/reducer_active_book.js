export default (state = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
  
    default:
      return state;
      break;
  }
}