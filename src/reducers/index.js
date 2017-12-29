import { combineReducers } from 'redux';
import PostsReducer from "./reducer_posts"
import { reducer as formReducer } from "redux-form"
//renaming because reducer is too generic

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;

