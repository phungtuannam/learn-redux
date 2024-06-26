import { INCREMENT, DECREMENT } from '../action/types'

const INITIAL_STATE = {
  count: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('Increment')
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREMENT:
      console.log('Decrement')
      return {
        ...state,
        count: state.count - 1,
      }

    default:
      return state
  }
}

export default reducer
