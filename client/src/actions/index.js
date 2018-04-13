import axios from 'axios';

export const ROOT_URL = 'http://localhost:1001/data'
//if production, joshmoxey.com/data/etc, else localhost

export const FETCH_PAGE = 'fetch_page';
export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGES_BY_IDS = 'fetch_pages_by_ids';
export const FETCH_PAGES_BY_SECTION = 'fetch_pages_by_section';

export const FETCH_SECTION = 'fetch_section';
export const FETCH_SECTIONS_BY_IDS = 'fetch_section_by_ids';

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
  const request = axios.get(`${ROOT_URL}/pages-by-section/${section}?same=same`)

  return {
    type: FETCH_PAGES_BY_SECTION,
    payload: request
  }
}

export function fetchSection(section) {
  const request = axios.get(`${ROOT_URL}/section/${section}`)

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
