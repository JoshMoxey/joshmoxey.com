import _ from "lodash";
import {UPDATE_TITLE} from "../actions/index";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return action.payload
      break;
    default:
      return state
  }
}


