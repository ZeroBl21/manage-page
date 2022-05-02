import React from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import users from "../../constants/users";
import "./Community.css";

const Community = () => {
  return (
    <section className="community">
      <h2 className="community__title">What they've said</h2>
      <Slider users={users} />
      <Button text="Get Started" />
    </section>
  );
};

export default Community;
