import axios from 'axios';
import {production} from "../global/global";
import queryString from "query-string"

export const ROOT_URL = production() ? "https://joshmoxey.com/api" : "http://localhost:1001/api"

export const FETCH_PAGE = 'fetch_page';
export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGES_BY_IDS = 'fetch_pages_by_ids';
export const FETCH_PAGES_BY_SECTION = 'fetch_pages_by_section';
export const RESET_PAGE_STATUS = 'reset_page_status'

export const FETCH_SECTION = 'fetch_section';
export const FETCH_SECTIONS_BY_IDS = 'fetch_section_by_ids';
export const RESET_SECTION_STATUS = 'reset_section_status'

export const LOG_REQUEST_HISTORY = "log_request_history"
export const LOG_VIEW_HISTORY = "log_view_history"
export const SEND_VIEW_INCREASE = "send_view_increase"

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

export function fetchPagesBySection(section, options) {
  const query = queryString.stringify(options)
  const url = `${ROOT_URL}/pages-by-section/${section}?${query}`
  return (dispatch, getState) => {
    if (!checkRequestHistory(getState, url)) {
      dispatch({
        type: FETCH_PAGES_BY_SECTION,
        payload: axios.get(url)
      }).then(() =>
        dispatch(logRequestHistory(url)),
      )
    } else {
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
  return getState().history.requests[id]
}

export function logRequestHistory(data) {
  return {
    type: LOG_REQUEST_HISTORY,
    payload: data
  }
}

export function increaseViewCount(id, type) {
  return (dispatch, getState) => {
    if (getLastView(getState) === id) {
      console.log("duplicate. Aborting")
      return
    }

    dispatch(
      sendViewIncrease(id, type),
      console.log(type)
    ).then(() =>
      dispatch(logViewHistory(id, type)),
    )
  }
}

export function getLastView(getState) {
  const {views} = getState().history
  const lastView = views[views.length - 1]
  if (!lastView) {
    return ""
  }
  return lastView.id
}

export function sendViewIncrease(id, type) {
  let str = queryString.stringify({type})
  const request = axios.post(`${ROOT_URL}/increase-view-count/${id}?${str}`)

  console.log(str)
  return {
    payload: request,
    type: SEND_VIEW_INCREASE
  }
}

export function logViewHistory(id, type) {
  return {
    type: LOG_VIEW_HISTORY,
    payload: {
      id,
      type
    }
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
