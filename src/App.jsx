import React from "react";
import "./normalize.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./container/Pricing";
import AboutUs from "./container/AboutUs";
import Community from "./container/Community";

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
      <AboutUs />
      <Community />
    </>
  );
}

export default App;
