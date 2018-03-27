import _ from "lodash";
import {FETCH_PAGE, FETCH_PAGES} from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PAGES:
      const arrayToObject = (array, key1, key2) =>
        array.reduce((obj, item, i) => {
          obj[`${item[key1][0].id}_${item[key2][0]}`] = item
          return obj
        }, {})
      return arrayToObject(action.payload.data, "sectionIds", "pageIds")
      // return _.mapKeys(action.payload, 'title');
      break;
    case FETCH_PAGE:
      let id = `${action.payload.data.sectionIds[0].id}_${action.payload.data.pageIds[0]}`
      return { ... state, [id]: action.payload.data}
      // return { ... state, [action.payload.data.id]: action.payload.data}
      break;
    default:
      return state
  }
}
