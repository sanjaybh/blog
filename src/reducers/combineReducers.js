import { combineReducers } from 'redux'
import postReducer from "./postReducer";

export default combineReducers({
  //returnMe: () => "Hi"
  posts: postReducer
}); 

