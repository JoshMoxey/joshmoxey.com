import _ from "lodash";
import {FETCH_PAGE} from "../actions/index";
import {FETCH_SECTION} from "../actions/index";

export default function (state = null, action) { //todo setting to null is breaking things, I think
  switch (action.type) {
    case FETCH_PAGE:
      // return { ... state, [action.payload.data.id]: action.payload.data}
      // return "same"
      return action.payload.data || null; //return fresh obj
      break;
    case FETCH_SECTION:
      return action.payload.data || null;
    default:
      return state;
  }
}