import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Header from "./components/header";
import Article from "./components/article";
import ArticleDetail from "./components/article-detail";
import Loading from "./components/loading";
const App = (props) => {
  const [nav, setNav] = useState();
  const [param, setParam] = useState();
  const [searchKey, setSearchKey] = useState();
  const goToPage = (value) => {
    setSearchKey(value);
  };

  return (
    <div className="App">
      <Header navigation={goToPage} />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Article searchKey={searchKey} />}
          />
          <Route exact path="/articledetail/:key" component={ArticleDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
