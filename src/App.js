import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Aside from "./components/aside/aside";
class App extends Component {
  state = {
    list1: [
      {
        id: 1,
        technology: "HTML"
      },
      {
        id: 2,
        technology: "HTML"
      },
      {
        id: 3,
        technology: "HTML"
      },
      {
        id: 4,
        technology: "HTML"
      }
    ]
  };
  render() {
    return (
      <div>
        <Aside list1={this.state.list1} align={"left"} />
        <Aside list1={this.state.list1} align={"right"} />
      </div>
    );
  }
}

export default App;
