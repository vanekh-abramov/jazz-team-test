import { CHECK_IS_ADMIN, SET_IS_ADMIN } from '../reducers/reducer'

export const checkIsAdmin = (payload) => ({
  type: CHECK_IS_ADMIN,
  payload
})

export const setIsAdmin = (payload) => ({
  type: SET_IS_ADMIN,
  payload
})