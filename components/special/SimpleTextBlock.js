import withContainers from "../wrappers/withContainer";
import { Global as globalState } from "./Global";
import React, { Component } from "react";

class SimpleTextBlock extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <div className="toolbar_card">
        <div className="flex justify-between mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-4"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z"
              className="fill-current text-gray-300"
            ></path>
            <path
              d="M14 2L20 8 14 8z"
              className="fill-current text-gray-500"
            ></path>
          </svg>
          <p className="toolbar_header">Text</p>
        </div>
        <p>{block.label}</p>
        <p>{block.value}</p>
      </div>
    );
  }
}

export default withContainers([globalState])(SimpleTextBlock);
