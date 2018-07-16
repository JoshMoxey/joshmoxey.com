import {
  REQUEST_FETCHING,
  CLOSE_FETCHING,
  REQUEST_FETCHED,
  REQUEST_ERRORED
} from "../actions/index";

export default (state = {}, action) => {
  let url
  switch (action.type) {
    case REQUEST_FETCHING:
      url = action.payload.url
      return {
        ...state,
        [url]: {
          ...state[url],
          fetching: true,
          fetched: false,
        }
      }
    case REQUEST_FETCHED:
      url = action.payload.url
      return {
        ...state,
        [url]: {
          ...state[url],
          fetching: false,
          fetched: true,
          data: action.payload.data,
          status: action.payload.status,
          error: null
        }
      }
    case REQUEST_ERRORED:
      return {
        ...state,
        [url]: {
          ...state[url],
          fetching: false,
          fetched: true,
          data: null,
          status: action.payload.status,
          error: action.payload.error
        }
      }
    default:
      return state
  }
}
