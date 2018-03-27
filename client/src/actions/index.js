import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'
export const ROOT = "http://reduxblog.herokuapp.com/api"
export const API_KEY = '?key=joshmoxey'

export const FETCH_PAGE = 'fetch_page';
export const FETCH_PAGES = 'fetch_pages';
export const ROOT_URL = 'http://localhost:1001/data'
//if production, joshmoxey.com/data/etc, else localhost

export const TOGGLE_SIDEBAR = 'toggle_sidebar'

export function fetchPage(section, page) {
  const request = axios.get(`${ROOT_URL}/page/${section}/${page}`)

  return {
    type: FETCH_PAGE,
    payload: request
  }
}

export function fetchSection(section) {
  const request = axios.get(`${ROOT_URL}/${section}`)

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

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  }
}