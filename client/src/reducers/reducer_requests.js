import {
  LOG_REQUEST_HISTORY,
  CHECK_REQUEST_HISTORY
} from "../actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_REQUEST_HISTORY:
      //move to object in the future w/ extra details
      return {
        ...state,
        [action.payload]: action.payload
      }
      break;
    default:
      return state
  }
}
