import { INCREMENT, DECREMENT } from './types'

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { like: 'Coding', name: 'Nam Phung' },
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  }
}
