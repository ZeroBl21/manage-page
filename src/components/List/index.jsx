import React from "react";
import './List.css';

const List = ({ number, title, text }) => {
  
  return (
    <div className="list">
      <span className="list__number">{number}</span>
      <h3 className="list__title">{title}</h3>  
      <p className="list__text">{text}</p>
    </div>
  )
}

export default List;
