import {
  FETCH_SECTION,
  RESET_SECTION_STATUS
} from "../actions/index";

export default function (state = {
  sections: {},
  status: null,
  redirect: false,
}, action) {
  switch (action.type) {
    case FETCH_SECTION:

      //send back to query param for page
      //change the id of sections to a straight up id instead of this filter shit
      //do this with pages url too?
      //when sending back a page, include the section it's being loaded under and place the id under that
      //or, map through for each section id in there
      // return {...state, status: action.payload.data.status}

      // const sections = sectionIds ? {...state.sections, [id]: action.payload.data} : state.sections
      const id = action.payload.data.sectionId

      let {redirect} = action.payload.data
      redirect = redirect ? action.payload.data.redirect.to : false

      return {
        ...state,
        sections: {
          ...state.sections,
          [id]: action.payload.data
        },
        status: action.payload.data.status,
        redirect
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
