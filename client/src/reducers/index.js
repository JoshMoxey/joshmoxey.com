import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form" //renaming because reducer is too generic
import PageReducer from "./reducer_page"
import SectionReducer from "./reducer_section"
import SidebarReducer from "./reducer_sidebar"
import TitleReducer from "./reducer_title"

const rootReducer = combineReducers({
  form: formReducer,
  pages: PageReducer,
  sections: SectionReducer,
  sidebar: SidebarReducer,
  title: TitleReducer
});

export default rootReducer;