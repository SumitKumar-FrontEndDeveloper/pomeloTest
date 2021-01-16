import React, { useState as useStateMock } from "react";

import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
import Article from "./index";

import * as redux from "react-redux";
const mockStore = configureMockStore([thunk]);
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();

describe("Article List test", () => {
  let wrapper;
  let useEffect;
  let store;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };
  beforeEach(() => {
    /* mocking store */
    if (typeof window !== "undefined") {
      window.localStorage.setItem("articleDetail", { title: "dff" });
      window.listeningActionName = "showbalance";
    }
    store = configureMockStore([thunk])({
      articles: {
        isError: false,
        isLoading: false,
        response: {
          data: [
            {
              product_name_Eng: "TMB All Free Account",
              product_name_TH: "บัญชี ทีเอ็มบี ออลล์ ฟรี",
              product_code: "225",
              balance_currency: "THB",
              current_balance: 905021.69,
              account_number: "00000462488263",
              relationship_code: "PRIIND",
              account_status: "00",
            },
          ],
        },
        isRequested: "Done",
        error: "",
      },
    });

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const setHookState = (newState) =>
      jest.fn().mockImplementation(() => [newState, () => {}]);

    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((state) => store.getState().articles);
    jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);
    useEffect = jest.spyOn(React, "useEffect").mockImplementation();
    mockUseEffect(); // 2 times
    wrapper = mount(<Article store={store} />);
  });
  it("test if there is access token", () => {
    // wrapper.find(ShowBalanceButton).simulate('click')
    // wrapper.find('HomeCard').props().onClick()
  });
});
