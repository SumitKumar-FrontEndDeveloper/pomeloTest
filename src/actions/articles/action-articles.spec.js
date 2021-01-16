import * as actions from "./articles";
import * as types from "./types";
import { fetchArticleList } from "./index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";
jest.mock("axios");
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test all action in", () => {
  it("should create an action to add a todo", () => {
    const expectedActionRequest = {
      type: types.ARTICLE_LIST_FETCH_REQUEST,
    };
    const expectedActionSuccess = {
      type: types.ARTICLE_LIST_FETCH_SUCCESS,
      articles: {},
    };
    const expectedActionGetError = {
      type: types.ARTICLE_LIST_FETCH_FAILURE,
      error: {},
    };

    expect(actions.articleListRequest({})).toEqual(expectedActionRequest);
    expect(actions.articleListSuccess({})).toEqual(expectedActionSuccess);
    expect(actions.articleListFailure({})).toEqual(expectedActionGetError);
  });
});

describe("Action Creator for Articles list", () => {
  beforeEach(() => {
    mockAxios.create.mockImplementation((config) => mockAxios);
    let requestCallback = () => {
      console.log("There were no interceptors");
    };
    mockAxios.interceptors.request.use.mockImplementation((callback) => {
      requestCallback = callback;
    });
    mockAxios.interceptors.response.use.mockImplementation((callback) => {
      requestCallback = callback;
    });
  });
  it("should dispatch action with status added", () => {
    const payload = {
      isError: false,
    };
    mockAxios.get.mockResolvedValueOnce({
      data: { value: "test" },
    });
    const expectedAction = [
      { type: types.ARTICLE_LIST_FETCH_SUCCESS, payload },
    ];
    const store = mockStore({});

    store.dispatch(fetchArticleList()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedAction);
    });
  });
});
