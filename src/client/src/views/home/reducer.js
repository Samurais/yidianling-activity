const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {'data': {...state.data, ...action.data}};
    default:
      return state
  }
}
export default themeReducer
