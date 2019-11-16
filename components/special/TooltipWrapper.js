import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Global as globalState } from "./Global";
import withContainers from "../wrappers/withContainer";
import styled from "styled-components";

const Tip = styled.div``;

class TooltipWrapper extends Component {
  render() {
    return (
      <div className="rounded shadow p-8 bg-gray-100">
        {this.props.children}
      </div>
    );
  }
}
export default TooltipWrapper;
