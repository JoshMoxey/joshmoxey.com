import {
  FETCH_PAGE,
  FETCH_PAGES,
  FETCH_PAGES_BY_IDS,
  FETCH_PAGES_BY_MORE,
  FETCH_PAGES_BY_SECTION,
  RESET_PAGE_STATUS
} from "../actions/index";

export default function (state = {
  pages: {},
  status: null,
  more: {
    featured: [],
    recent: [],
    most_viewed: []
  }
}, action) {
  const arrayToObject = (array, key1, key2) =>
    //loop through array on pages
    //loop through the sectionIds for that current page
    //create a page entry for each sectionId
    array.reduce((obj, page) => {
      page.sectionIds.forEach((id, i) => {
        let key = `${page[key1][i]}_${page[key2]}`
        page.id = key
        obj[key] = page
        return obj
      })
      return obj
    }, {})

  switch (action.type) {
    case FETCH_PAGE:
      if (action.payload.data.status === 200) {
        let pages = arrayToObject([action.payload.data], "sectionIds", "pageId")
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
      let pagesBySection = arrayToObject(action.payload.data, "sectionIds", "pageId")
      return {
        ...state,
        pages: {
          ...state.pages,
          ...pagesBySection
        }
      }
      break
    case FETCH_PAGES_BY_IDS:
      let pagesByIds = arrayToObject(action.payload.data, "sectionIds", "pageId")
      return {
        ...state,
        pages: {
          ...state.pages,
          ...pagesByIds
        }
      }
      break
    case FETCH_PAGES_BY_MORE:
      const {recent, featured, most_viewed} = action.payload.data
      const combinedPages = [...recent, ...featured, ...most_viewed]
      let pagesByMore = arrayToObject(combinedPages, "sectionIds", "pageId")

      const returnIds = (array) =>
        array.reduce((arr, page) => {
          let key = `${page.sectionIds[0]}_${page.pageId}`
          arr = [...arr, key]
          return arr
        }, [])

      return {
        ...state,
        pages: {
          ...state.pages,
          ...pagesByMore
        },
        more: {
          ...state.more,
          featured: [
            ...returnIds(featured),
            ...state.more.featured,
          ],
          recent: [
            ...returnIds(recent),
            ...state.more.recent,
          ],
          most_viewed: [
            ...returnIds(most_viewed),
            ...state.more.most_viewed,
          ],
        }
      }
      break
    case FETCH_PAGES:
      let pages = arrayToObject(action.payload.data, "sectionIds", "pageId")
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