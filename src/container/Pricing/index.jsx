import React from "react";
import Article from "../../components/Article";
import Button from "../../components/Button";
import { intro } from "../../constants/images";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing section__center" id="pricing">
      <Article
        title="Bring everyone together to build better products."
        text="Manage majes it simple for software teams to plan day-to-day task while keeping the larger team goals in view."
        large
      >
        <Button text="Get Started" />
      </Article>

      <div className="pricing__img">
        <img src={intro} alt="pricing" />
      </div>
    </section>
  );
};

export default Pricing;
