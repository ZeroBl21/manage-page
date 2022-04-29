import React from "react";
import "./normalize.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./container/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
    </>
  );
}

export default App;
