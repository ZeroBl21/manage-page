import React from "react";
import "./Article.css";

const Article = ({ title, text, large, small, children }) => {
  return (
    <article className="article">
      <h2
        className={`
        article__title 
        ${large ? "large" : small ? "small" : "medium"}
        `}
      >
        {title}
      </h2>
      <p className="article__text">{text}</p>
      {children}
    </article>
  );
};

export default Article;
