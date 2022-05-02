import React from "react";
import Article from '../Article';
import "./Slider.css";

const Slider = ({ users }) => {
  return (
    <section className="slider">
      {users &&
        users.map((user) => (
          <article className="slider__card" key={user.id}>
            <img className="slider__img" src={user.image} alt={user.name} />
            <Article
              title={user.name}
              text={user.commentary}
              small
              center
            />
          </article>
        ))}
    </section>
  );
};

export default Slider;
