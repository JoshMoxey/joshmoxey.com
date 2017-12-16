import { combineReducers } from 'redux';
import PostsReducer from "./reducer_posts"
import { reducer as formReducer } from "redux-form"
import PageReducer from "./reducer_page" //renaming because reducer is too generic

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  page: PageReducer
});

export default rootReducer;