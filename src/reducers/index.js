import { combineReducers } from "redux";
import articles from "./articles";

export default function getRootReducer() {
  return combineReducers({
    articles,
  });
}
