import {
  LOG_REQUEST_HISTORY,
  CHECK_REQUEST_HISTORY,
  LOG_PAGE_HISTORY,
  LOG_SECTION_HISTORY
} from "../actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_REQUEST_HISTORY:
      //move to object in the future w/ extra details
      return {
        ...state,
        requests: {
          ...state.requests,
          [action.payload]: action.payload
        }
      }
      break;
    case LOG_PAGE_HISTORY:
      //move to object in the future w/ extra details
      return {
        ...state,
        requests: {
          ...state.requests,
          [action.payload]: action.payload
        }
      }
      break;
    case LOG_SECTION_HISTORY:
      //move to object in the future w/ extra details
      return {
        ...state,
        requests: {
          ...state.requests,
          [action.payload]: action.payload
        }
      }
      break;
    default:
      return state
  }
}
