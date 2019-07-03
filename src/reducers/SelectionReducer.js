export default (state = null, action) => {
  //console.log(action, state);
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
