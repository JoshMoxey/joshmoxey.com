import _ from "lodash";
import {FETCH_PAGE, FETCH_PAGES, FETCH_PAGES_BY_IDS, FETCH_PAGES_BY_SECTION} from "../actions/index";

export default function(state = {}, action) {
  const arrayToObject = (array, key1, key2) =>
    array.reduce((obj, item, i) => {
      obj[`${item[key1][0].id}_${item[key2][0]}`] = item
      return obj
    }, {})
  switch (action.type) {
    case FETCH_PAGE:
      let id = `${action.payload.data.sectionIds[0].id}_${action.payload.data.pageIds[0]}`
      return { ... state, [id]: action.payload.data}
      break;
    case FETCH_PAGES_BY_SECTION:
      let pagesBySection = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ... state,
        ... pagesBySection
      }
      break;
    case FETCH_PAGES_BY_IDS:
      let pagesByIds = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ... state,
        ... pagesByIds
      }
      break;
    case FETCH_PAGES:
      let pages = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ... state,
        ... pages
      }
      break;
    default:
      return state
  }
}


