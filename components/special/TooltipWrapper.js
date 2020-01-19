import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Global as globalState } from "./Global";
import withContainers from "../wrappers/withContainer";
import styled from "styled-components";

class TooltipWrapper extends Component {
  render() {
    return (
      <div className="p-8 m-4 bg-gray-100 rounded shadow">
        {this.props.children}
      </div>
    );
  }
}
export default TooltipWrapper;
