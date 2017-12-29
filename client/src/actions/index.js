import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'
export const ROOT = "http://reduxblog.herokuapp.com/api"
export const API_KEY = '?key=joshmoxey'

export const FETCH_PAGE = 'fetch_page';
export const ROOT_URL = 'http://localhost'

export function fetchPosts(){
  const request = axios.get(`${ROOT}/posts${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT}/posts${API_KEY}`, values)
    .then(() => callback());
  
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT}/posts/${id}${API_KEY}`)
  
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT}/posts/${id}${API_KEY}`)
    .then(() => callback())
  
  return {
    type: DELETE_POST,
    payload: request
  }
}

export function fetchPage() {
  const request = axios.get(
    `http://localhost:1001/data/page/podcast`
  )
  
  return {
    type: FETCH_PAGE,
    payload: request
  }
}