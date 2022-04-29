import React from "react";
import Button from "../../components/Button";
import { intro } from "../../constants/images";
import './Pricing.css';

const Pricing = () => {
  
  return (
    <section className="pricing section__center" id="pricing">

      <article className="pricing__text">
        <h1 className="pricing__text-title">Bring everyone together to build better products.</h1>
        <p className="pricing__text-p">
          Manage majes it simple for software teams to plan day-to-day task
          while keeping the larger team goals in view.
        </p>
        <Button text="Get Started" />
      </article>

      <div className="pricing__img">
        <img src={intro} alt="pricing" />
      </div>
      
    
    </section>
  )
}

export default Pricing;
