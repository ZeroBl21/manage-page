import React from "react";
import Article from "../../components/Article";
import List from "../../components/List";

import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="aboutus section__center">
      <Article
        title="What's different about Manage?"
        text="Manage provides all the funtionality your team needs, without
          the complexity. Our software is tailer-made for modern digital
          products teams."
      />

      <div className="aboutus__list">
        <List
          number="01"
          title="Track company-wide progress"
          text="See how your data-to-daty tasks fit int the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />

        <List
          number="02"
          title="Advanced build-in reports"
          text="Set internal delivery estimates and track progress toward company 
          goals. Our customisable dashboard helps you build out the reports 
          you need to keep key stakeholders informed."
        />

        <List
          number="03"
          title="Everything you need in one place"
          text="Stop jumping from one service to another to communicate, store files, 
          track tasks and share documents. Manage offers an all-in-one team 
          productivity solution."
        />
      </div>
    </section>
  );
};

export default AboutUs;
