import React from "react";
import "./normalize.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Pricing from "./container/Pricing";
import AboutUs from "./container/AboutUs";
import Community from "./container/Community";
import Divider from "./container/Divider"
import Footer from "./container/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
      <AboutUs />
      <Community />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
