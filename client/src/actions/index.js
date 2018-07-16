import axios from 'axios';
import {production} from "../global/global";
import queryString from "query-string"

export const ROOT_URL = production() ? "https://joshmoxey.com/api" : "http://localhost:1001/api"

export const FETCH_PAGE = 'fetch_page';
export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGES_BY_IDS = 'fetch_pages_by_ids';
export const FETCH_PAGES_BY_MORE = 'fetch_pages_by_more';
export const FETCH_PAGES_BY_SECTION = 'fetch_pages_by_section';
export const RESET_PAGE_STATUS = 'reset_page_status'

export const FETCH_SECTION = 'fetch_section';
export const FETCH_SECTIONS_BY_IDS = 'fetch_section_by_ids';
export const RESET_SECTION_STATUS = 'reset_section_status'

export const LOG_REQUEST_HISTORY = "log_request_history"
export const REQUEST_FETCHING = "req_fetching"
export const REQUEST_FETCHED = "req_fetched"
export const REQUEST_ERRORED = "req_errored"

export const LOG_VIEW_HISTORY = "log_view_history"
export const SEND_VIEW_INCREASE = "send_view_increase"

export const TOGGLE_SIDEBAR = 'toggle_sidebar'
export const UPDATE_TITLE = 'update_title'

export function isFetching(getState, url) {
  const request = getState().requests[url]
  if (request) {
    return request.fetching
  }
  return false
}

export function hasFetched(getState, url) {
  const request = getState().requests[url]
  if (request) {
    return request.fetched
  }
  return false
}

export function requestFetching(url) {
  return {
    type: REQUEST_FETCHING,
    payload: {
      url
    }
  }
}

export function requestFetched(url, status) {
  return {
    type: REQUEST_FETCHED,
    payload: {
      url,
      status
    }
  }
}

export function requestErrored(url, status, error) {
  return {
    type: REQUEST_ERRORED,
    payload: {
      url,
      status,
      error
    }
  }
}

export function fetchPage(section, page) {
  let url = `${ROOT_URL}/page/${section}/${page}`
  return (dispatch, getState) => {
    if (isFetching(getState, url)) {
      return
    }
    if (hasFetched(getState, url)) {
      return
    }

    dispatch(
      requestFetching(url),
      axios.get(url)
        .then((response) => {
          dispatch(requestFetched(url, response.status))
          dispatch({
            type: FETCH_PAGE,
            payload: response
          })
        }).catch(error => {
        requestErrored(url, error)
        //todo move to error.response.status
      })
    )
  }
}

export function fetchPagesByIds(ids) {
  let url = `${ROOT_URL}/pages-by-ids`
  return (dispatch, getState) => {
    if (isFetching(getState, url)) {
      return
    }
    if (hasFetched(getState, url)) {
      return
    }

    dispatch(
      axios.post(url, {ids})
        .then((response) => {
          dispatch(requestFetched(url, response.status))
          dispatch({
            type: FETCH_PAGES_BY_IDS,
            payload: request
          })
        }).catch(error => {
        requestErrored(url, error)
        //todo move to error.response.status
      })
    )
  }
}

export function fetchPagesByMore(query) {
  const qs = queryString.stringify({sectionId: query})
  const url = `${ROOT_URL}/pages-by-more?${qs}`

  return (dispatch, getState) => {
    if (isFetching(getState, url)) {
      return
    }
    if (hasFetched(getState, url)) {
      return
    }

    dispatch(
      requestFetching(url),
      axios.get(url)
        .then((response) => {
          dispatch(requestFetched(url, response.status))
          dispatch({
            type: FETCH_PAGES_BY_MORE,
            payload: response
          })
        }).catch(error => {
        requestErrored(url, error)
        //todo move to error.response.status
      })
    )
  }
}

export function fetchPagesBySection(section, options) {
  const query = queryString.stringify(options)
  const url = `${ROOT_URL}/pages-by-section/${section}?${query}`

  return (dispatch, getState) => {
    if (isFetching(getState, url)) {
      return
    }
    if (hasFetched(getState, url)) {
      return
    }

    dispatch(
      requestFetching(url),
      axios.get(url)
        .then((response) => {
          dispatch(requestFetched(url, response.status))
          dispatch({
            type: FETCH_PAGES_BY_SECTION,
            payload: response
          })
        }).catch(error => {
        requestErrored(url, error)
        //todo move to error.response.status
      })
    )
  }
}


export function fetchSection(id) {
  const url = `${ROOT_URL}/wild-card/${id}`
  return (dispatch, getState) => {
    if (isFetching(getState, url)) {
      return
    }
    if (hasFetched(getState, url)) {
      return
    }

    dispatch(
      requestFetching(url),
      axios.get(url)
        .then((response) => {
          dispatch(requestFetched(url, response.status))
          dispatch({
            type: FETCH_SECTION,
            payload: response
          })
        }).catch(error => {
        requestErrored(url, error)
        //todo move to error.response.status
      })
    )
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
      console.log("sentViewInc")
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
