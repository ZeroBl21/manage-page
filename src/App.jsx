import React from "react";
import "./normalize.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./container/Pricing";
import AboutUs from "./container/AboutUs";
import Community from "./container/Community";
import Divider from "./container/Divider"

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
      <AboutUs />
      <Community />
      <Divider />
    </>
  );
}

export default App;
