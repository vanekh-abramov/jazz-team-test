export const CHECK_IS_ADMIN = 'CHECK_IS_ADMIN'
export const SET_IS_ADMIN = 'SET_IS_ADMIN'

const initialState = {
  user: {},
  isLogin: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IS_ADMIN:
      return {
        ...state,
        user: action.payload
      }
    case SET_IS_ADMIN:
      return {
        ...state,
        isLogin: action.payload
      }
    default:
      return state
  }
}
