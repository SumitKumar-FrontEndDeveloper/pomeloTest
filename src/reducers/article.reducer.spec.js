import articles from "./articles";
import * as types from "../actions/articles/types";

describe("Cutomer Profile OTP reducers", () => {
  it("should return the initial state", () => {
    expect(articles(undefined, {})).toEqual({
      response: null,
      searchResponse: null,
      isLoading: false,
      error: "",
    });
  });

  it("should handle CUSTOMER_DETAILS_FETCH_REQUEST", () => {
    let action = {
      type: types.ARTICLE_LIST_FETCH_REQUEST,
    };
    const expected = {
      isLoading: true,
    };
    expect(articles({}, action)).toEqual(expected);
  });

  it("should handle ARTICLE_LIST_FETCH_SUCCESS", () => {
    let action = {
      type: types.ARTICLE_LIST_FETCH_SUCCESS,
      articles: [{ data: "test data" }],
    };
    const expected = {
      isLoading: false,
      response: action.articles,
      error: "",
    };
    expect(articles({}, action)).toEqual(expected);
  });

  it("should handle ARTICLE_LIST_FETCH_FAILURE", () => {
    let action = {
      type: types.ARTICLE_LIST_FETCH_FAILURE,
    };
    const expected = {
      error: "Something went wrong",
    };
    expect(articles({}, action)).toEqual(expected);
  });
});
