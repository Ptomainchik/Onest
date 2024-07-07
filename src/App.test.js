import React from "react";
import ReactDOM from "react-dom";
import OneApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<OneApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
});
