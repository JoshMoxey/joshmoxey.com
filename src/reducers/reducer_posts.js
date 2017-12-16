import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, FETCH_PAGE} from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      break;
    case FETCH_POST:
      return { ... state, [action.payload.data.id]: action.payload.data}
      break;
    case DELETE_POST:
      return _.omit(state, action.payload)
      return
    default:
      return state
  }
}