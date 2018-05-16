import {
  FETCH_SECTION,
  RESET_SECTION_STATUS
} from "../actions/index";

export default function (state = {
  sections: {},
  status: null,
  redirect: false,
}, action) {
  const arrayToObject = (array, key1, key2) =>
    array.reduce((obj, item, i) => {
      obj[`${item[key1][0].id}_${item[key2][0]}`] = item
      return obj
    }, {})
  switch (action.type) {
    case FETCH_SECTION:

      //send back to query param for page
      //change the id of sections to a straight up id instead of this filter shit
      //do this with pages url too?
      //when sending back a page, include the section it's being loaded under and place the id under that
      //or, map through for each section id in there
      // return {...state, status: action.payload.data.status}

      const sectionIds = action.payload.data.sectionIds
      const id = sectionIds ? sectionIds[0] : ""
      const sections = sectionIds ? {...state.sections, [id]: action.payload.data} : state.sections

      return {
        ...state,
        sections,
        status: action.payload.data.status,
        redirect: action.payload.data.to,
      }
      break;
    case RESET_SECTION_STATUS:
      return {
        ...state,
        status: null
      }
      break;
    default:
      return state
  }
}
