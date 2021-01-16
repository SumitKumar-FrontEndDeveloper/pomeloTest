import {
  articleListRequest,
  articleListSuccess,
  articleListFailure,
} from "./articles";
import API from "../../framework/api";
import { endpoint } from "../../framework/config";

export const fetchArticleList = (q) => {
  return (dispatch) => {
    dispatch(articleListRequest());
    const headers = {};
    let url =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau";
    if (q) {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}&api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau`;
    }
    return API.get(url, headers, undefined)
      .then((response) => {
        dispatch(articleListSuccess(response));
      })
      .catch((error) => {
        dispatch(articleListFailure(error));
      });
  };
};
