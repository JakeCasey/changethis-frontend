import withContainers from "../wrappers/withContainer";

import { Global as globalState } from "./Global";
import React, { Component } from "react";

import SickButton from "../styles/SickButton";

class PinBlock extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <div className="toolbar_card">
        <div className="toolbar_header_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="toolbar-icon"
          >
            <path
              className="fill-current text-gray-300"
              d="M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"
            />
            <path
              className="fill-current text-gray-500"
              d="M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z"
            />
          </svg>
          <p className="toolbar_header">Pin</p>
        </div>
        {this.props.test &&
          this.props.test.state.pins.map((p, index) => {
            if (p.belongsTo == this.props.block.id) {
              return <p key={index}>{p.comment}</p>;
            }
          })}
        <SickButton
          onClick={() =>
            this.props.test.togglePinPlacement(this.props.block.id)
          }
        >
          {this.props.test && this.props.test.state.isPlacingPin
            ? "Stop Placing Pins"
            : "Place Pin"}
        </SickButton>
      </div>
    );
  }
}

export default withContainers([globalState])(PinBlock);
