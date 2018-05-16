import axios from 'axios';

export const ROOT_URL = 'http://localhost:1001/data'
//if production, joshmoxey.com/data/etc, else localhost

export const FETCH_PAGE = 'fetch_page';
export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGES_BY_IDS = 'fetch_pages_by_ids';
export const FETCH_PAGES_BY_SECTION = 'fetch_pages_by_section';
export const RESET_PAGE_STATUS = 'reset_page_status'

export const FETCH_SECTION = 'fetch_section';
export const FETCH_SECTIONS_BY_IDS = 'fetch_section_by_ids';
export const RESET_SECTION_STATUS = 'reset_section_status'

export const LOG_REQUEST_HISTORY = "log_request_history"
export const CHECK_REQUEST_HISTORY = "check_request_history"

export const TOGGLE_SIDEBAR = 'toggle_sidebar'
export const UPDATE_TITLE = 'update_title'

export function fetchPage(section, page) {
  const request = axios.get(`${ROOT_URL}/page/${section}/${page}`)

  return {
    type: FETCH_PAGE,
    payload: request
  }
}

export function fetchPagesByIds(ids) {
  const request = axios.post(`${ROOT_URL}/pages-by-ids`, {ids})

  return {
    type: FETCH_PAGES_BY_IDS,
    payload: request
  }
}

export function fetchPagesBySection(section) {
  const url = `${ROOT_URL}/pages-by-section/${section}`
  // const request = axios.get(url)

  return (dispatch, getState) => {
    if (!checkRequestHistory(getState, url)) {

      dispatch({
        type: FETCH_PAGES_BY_SECTION,
        payload: axios.get(url)
      }).then(() =>
        dispatch(logRequestHistory(url)),
      )
    } else {
      console.log("sim nope")
      return {}
    }
  }
}

export function fetchSection(id) {
  const request = axios.get(`${ROOT_URL}/wild-card/${id}`)

  return {
    type: FETCH_SECTION,
    payload: request
  }
}

export function fetchSectionsByIds(section) {
  const request = axios.get(`${ROOT_URL}/sections-by-ids/${section}`)

  return {
    type: FETCH_SECTIONS_BY_IDS,
    payload: request
  }
}

export function checkRequestHistory(getState, id) {
  return getState().requests[id]
  // if (getState().requests[id]) {
  //   return true
  // }
  // return false
}

export function logRequestHistory(data) {
  // console.log("data", data)
  return {
    type: LOG_REQUEST_HISTORY,
    payload: data
  }
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  }
}

export function updateTitle(title) {
  return {
    type: UPDATE_TITLE,
    payload: title
  }
}

export function resetSectionStatus() {
  return {
    type: RESET_SECTION_STATUS
  }
}

export function resetPageStatus() {
  return {
    type: RESET_PAGE_STATUS
  }
}
