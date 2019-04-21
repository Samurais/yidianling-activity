const reducer = (state, action) => {
  return {...state.data, ...action.data};
}
export default reducer
