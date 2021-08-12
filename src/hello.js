import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export default class Hello extends Component {
  componentDidMount() {
    // console.log("ComponentDidMount", this.props.total);
  }

  componentDidUpdate(preProps, preState) {
    // console.log("PreState", preState);
    // console.log("preProps", preProps);
    // console.log("[data] ", { preProps, thisProps: this.props });
  }

  render() {
    // console.log("render", this.props.total);
    return <div className="wrapper">Hello</div>;
  }
}
