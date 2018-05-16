import {
  FETCH_PAGE,
  FETCH_PAGES,
  FETCH_PAGES_BY_IDS,
  FETCH_PAGES_BY_SECTION,
  RESET_PAGE_STATUS
} from "../actions/index";

export default function (state = {
  pages: {},
  status: null,
  requests: {}
}, action) {
  const arrayToObject = (array, key1, key2) =>
    //loop through array on pages
    //loop through the sectionIds for that current page
    //create a page entry for each sectionId
    array.reduce((obj, page) => {
      page.sectionIds.forEach((id, i) => {
        obj[`${page[key1][i].id}_${page[key2][0]}`] = page
        return obj
      })
      return obj
    }, {})

  switch (action.type) {
    case FETCH_PAGE:
      if (action.payload.data.status === 200) {
        let id = `${action.payload.data.sectionIds[0].id}_${action.payload.data.pageIds[0]}`
        let pages = arrayToObject([action.payload.data], "sectionIds", "pageIds")

        return {
          ...state,
          pages: {
            ...state.pages,
            ...pages
          },
          status: action.payload.data.status
        }
      }
      return {...state, status: action.payload.data.status}
      break
    case FETCH_PAGES_BY_SECTION:
      let pagesBySection = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ...state,
        pages: {
          ...state.pages,
          ...pagesBySection
        }
      }
      break
    case FETCH_PAGES_BY_IDS:
      let pagesByIds = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ...state,
        pages: {
          ...state.pages,
          ...pagesByIds
        }
      }
      break
    case FETCH_PAGES:
      let pages = arrayToObject(action.payload.data, "sectionIds", "pageIds")
      return {
        ...state,
        pages: {
          ...state.pages,
          ...pages
        }
      }
      break
    case RESET_PAGE_STATUS:
      return {
        ...state,
        status: null
      }
      break
    default:
      return state
  }
}
