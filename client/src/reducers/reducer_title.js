import _ from "lodash";
import {UPDATE_TITLE} from "../actions/index";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_TITLE:
      console.log(action.payload)
      return action.payload
      break;
    default:
      return state
  }
}


