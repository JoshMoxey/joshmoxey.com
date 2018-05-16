import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form" //renaming because reducer is too generic
import PageReducer from "./reducer_page"
import SectionReducer from "./reducer_section"
import SidebarReducer from "./reducer_sidebar"
import TitleReducer from "./reducer_title"
import RequestsReducer from "./reducer_requests"

const rootReducer = combineReducers({
  form: formReducer,
  pages: PageReducer,
  sections: SectionReducer,
  sidebar: SidebarReducer,
  title: TitleReducer,
  requests: RequestsReducer,
});

export default rootReducer;