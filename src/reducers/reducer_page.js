import _ from "lodash";
import {FETCH_PAGE} from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_PAGE:
      // return { ... state, [action.payload.data.id]: action.payload.data}
      return action.payload.data.data; //return fresh obj
      break;
  }
  return state;
}