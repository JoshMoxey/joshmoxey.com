import {
  LOG_REQUEST_HISTORY,
  LOG_VIEW_HISTORY,
} from "../actions/index";

export default function (state = {
  requests: {},
  views: []
  }, action) {
  switch (action.type) {
    case LOG_REQUEST_HISTORY:
      return {
        ...state,
        requests: {
          ...state.requests,
          //add extra details to the obj in the future
          [action.payload]: action.payload
        }
      }
      break;
    case LOG_VIEW_HISTORY:
      return {
        ...state,
        views: [
          ...state.requests,
          {
            id: action.payload.id,
            type: action.payload.type
          }
        ]
      }
      break;
    default:
      return state
  }
}
