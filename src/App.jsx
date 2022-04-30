import React from "react";
import "./normalize.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./container/Pricing";
import AboutUs from "./container/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
      <AboutUs />
    </>
  );
}

export default App;
