import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../components/CommentsList";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const articleInfoData = response.data;
      setArticleInfo(articleInfoData);
    };
    loadArticleInfo();
  }, []);

  const article = articles.find((article) => article.name === articleId);

  const addUpVote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        <button onClick={addUpVote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} vote(s)</p>
      </div>

      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
