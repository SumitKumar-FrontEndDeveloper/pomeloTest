import React, { useState as useStateMock } from "react";

import { mount } from "enzyme";
import ArticleDetail from "./index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Article List test", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    /* mocking store */
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "articleDetail",
        JSON.stringify({
          abstract: "dff",
          pub_date: "dff",
          multimedia: ["fdf"],
          headline: { main: "dff" },
        })
      );
      window.listeningActionName = "showbalance";
    }

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const setHookState = (newState) =>
      jest.fn().mockImplementation(() => [newState, () => {}]);
    wrapper = mount(<ArticleDetail store={store} />);
  });
  it("test if there is access token", () => {});
});
