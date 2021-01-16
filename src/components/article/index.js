import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Loading from "./../../components/loading";
import { fetchArticleList } from "./../../actions/articles";
import { useHistory } from "react-router-dom";
import "./article.css";
const Article = ({ searchKey }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.articles.isLoading);
  const [search, setSearch] = useState();
  const [articleList, setArticleList] = useState();
  const history = useHistory();

  useEffect(() => {
    setSearch((prevState) => {
      if (searchKey != prevState) {
        dispatch(fetchArticleList(searchKey));
      }
      return searchKey;
    });
    if (articles?.response) {
      const atricleData = articles?.response?.response?.docs;
      console.log("atricleData");
      console.log(atricleData);
      setArticleList(atricleData);
    } else if (!isLoading) {
      dispatch(fetchArticleList(searchKey));
    }
  }, [isLoading, searchKey]);

  useEffect(() => {
    console.log(searchKey);
  }, [searchKey]);
  const goToDetail = (key) => {
    if (typeof window != undefined) {
      window.localStorage.setItem(
        "articleDetail",
        JSON.stringify(articleList[key])
      );
    }
    history.push("articledetail/" + key);
  };

  return (
    <React.Fragment>
      <div className="middleContainer">
        <Loading isLoading={isLoading} />
        {articleList &&
          articleList.map((value, key) => (
            <Card className="card" key={key} onClick={() => goToDetail(key)}>
              <div>
                <Card.Img
                  variant="top"
                  src={
                    value.multimedia
                      ? value.multimedia.length > 0
                        ? `https://static01.nyt.com/${value.multimedia[0].url}`
                        : "/noImage.png"
                      : "/noImage.png"
                  }
                />
              </div>
              <Card.Body>
                <Card.Title>
                  {value.headline ? value.headline.main : ""}
                </Card.Title>
                <Card.Text>
                  {value.lead_paragraph
                    ? value.lead_paragraph.substr(0, 150)
                    : ""}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        {articleList == null ||
          (articleList.length == 0 && !isLoading && (
            <img className="noDataImage" src="nodata.png" />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Article;
