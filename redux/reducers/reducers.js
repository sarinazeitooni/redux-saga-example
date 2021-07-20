import {actionTypes} from "../actionTypes/actionTypes";
const initialState=0;
export default function counter(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    case actionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}
