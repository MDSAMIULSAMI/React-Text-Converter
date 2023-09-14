import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import logo from "./logo.svg";
import "./App.css";
// import TextForm from "./components/TextForm";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="UpperCase Converter" About="About Us"/>
        <div className="container my-2">
        {/* <TextForm heading="Text Analyser"/> */}
        <About/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
