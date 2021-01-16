import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./article-detail.css";
import { formatDate } from "../../util/utility";
const ArticleDetail = (props) => {
  const [articleDetail, setArticleDetail] = useState();
  //const key = props.match.params.key;
  useEffect(() => {
    if (typeof window != undefined) {
      const articleData = JSON.parse(
        window.localStorage.getItem("articleDetail")
      );
      setArticleDetail(articleData);
    }
  }, []);
  return (
    <div>
      <div className="middleContainer">
        {articleDetail && (
          <Card className="card">
            <div>
              <Card.Img
                variant="top"
                src={
                  articleDetail.multimedia
                    ? articleDetail.multimedia.length > 0
                      ? `https://static01.nyt.com/${articleDetail.multimedia[0].url}`
                      : "/noImage.png"
                    : "/noImage.png"
                }
              />
            </div>
            <Card.Body>
              <Card.Title>
                {articleDetail.headline ? articleDetail.headline.main : ""}
              </Card.Title>
              <Card.Text>
                {articleDetail.lead_paragraph
                  ? articleDetail.lead_paragraph.substr(0, 150)
                  : ""}
              </Card.Text>
            </Card.Body>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Article Date: {formatDate(articleDetail.pub_date)}
              </small>
            </footer>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
