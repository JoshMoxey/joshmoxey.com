import { combineReducers } from 'redux';
import PostsReducer from "./reducer_posts"
import { reducer as formReducer } from "redux-form" //renaming because reducer is too generic
import PageReducer from "./reducer_page"
import SidebarReducer from "./reducer_sidebar"

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  pages: PageReducer,
  sidebar: SidebarReducer
});

export default rootReducer;