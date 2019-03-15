import React, { Component } from "react";
import "./aside.css";
class Aside extends Component {
  state = {};
  render() {
    console.log("this.props", this.props);
    let lists;
    if (this.props.list1 && this.props.list1.length) {
      lists = this.props.list1.map(list => (
        <li key={list.id}>{list.technology}</li>
      ));
    }

    return (
      <div className="container">
        <aside>
          <ul style={{ float: this.props.align }}>{lists ? lists : ""}</ul>
        </aside>
      </div>
    );
  }
}

export default Aside;
