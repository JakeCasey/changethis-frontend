import withContainers from "../wrappers/withContainer";
import { Global as globalState } from "./Global";
import React, { Component } from "react";

class SimpleTextBlock extends Component {
  state = {};

  updateTextBlock = e => {
    let value = e.target.value;
    let name = e.target.name;

    let textBlock = this.props.block;
    console.log(textBlock);
    textBlock[name] = value;

    this.props.globalState.updateTextBlock(textBlock);
  };

  render() {
    var block = this.props.block;
    return (
      <div className="toolbar_card">
        <div className="toolbar_header_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="toolbar-icon"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z"
              className="text-gray-300 fill-current"
            ></path>
            <path
              d="M14 2L20 8 14 8z"
              className="text-gray-500 fill-current"
            ></path>
          </svg>
          <p className="toolbar_header">Text</p>
        </div>
        <input
          name="label"
          value={this.props.block.label}
          onChange={e => this.updateTextBlock(e)}
        ></input>
        <input
          name="value"
          value={this.props.block.value}
          onChange={e => this.updateTextBlock(e)}
        ></input>
      </div>
    );
  }
}

export default withContainers([globalState])(SimpleTextBlock);
