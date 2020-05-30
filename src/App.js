import React from "react";
import "./App.css";
import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
