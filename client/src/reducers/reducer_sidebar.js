import _ from "lodash";
import {TOGGLE_SIDEBAR} from "../actions/index";

export default function (state = {open: false}, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {open: !state.open}
      break;
    default:
      return state;
  }
}