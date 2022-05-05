import React from "react";
import Button from '../../components/Button'
import "./Divider.css";

const Divider = () => {
  return (
    <section className="divider" >
      <h2>Simplify how your team works today.</h2>
      <div>
        <Button 
         text="Get Started"
         inverted
        />
      </div>
    </section>
  )
}

export default Divider;
