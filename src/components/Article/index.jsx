import React from "react";
import "./Article.css";

const Article = ({ title, text, large, small, center, children }) => {
  return (
    <article className={`article ${center ? "center" : ""}`}>
      <h2
        className={`
        article__title 
        ${large ? "large" : small ? "small" : "medium"}
        `}
      >
        {title}
      </h2>
      <p className={`article__text ${center ? "center" : ""}`}>{text}</p>
      {children}
    </article>
  );
};

export default Article;
