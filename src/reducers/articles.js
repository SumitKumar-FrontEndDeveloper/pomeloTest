import {
  ARTICLE_LIST_FETCH_REQUEST,
  ARTICLE_LIST_FETCH_SUCCESS,
  ARTICLE_LIST_FETCH_FAILURE,
} from "../actions/articles/types";
const defaultState = {
  response: null,
  searchResponse: null,
  isLoading: false,
  error: "",
};
const articles = (state = JSON.parse(JSON.stringify(defaultState)), action) => {
  switch (action.type) {
    case ARTICLE_LIST_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ARTICLE_LIST_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.articles,
        error: "",
      };
    case ARTICLE_LIST_FETCH_FAILURE:
      return {
        ...state,
        error: "Something went wrong",
      };

    default:
      return state;
  }
};
export default articles;
