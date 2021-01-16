import {
  ARTICLE_LIST_FETCH_REQUEST,
  ARTICLE_LIST_FETCH_SUCCESS,
  ARTICLE_LIST_FETCH_FAILURE,
} from "./types";

export const articleListRequest = () => {
  return {
    type: ARTICLE_LIST_FETCH_REQUEST,
  };
};

export const articleListSuccess = (articles) => {
  return {
    type: ARTICLE_LIST_FETCH_SUCCESS,
    articles,
  };
};

export const articleListFailure = (error) => {
  return {
    type: ARTICLE_LIST_FETCH_FAILURE,
    error,
  };
};
