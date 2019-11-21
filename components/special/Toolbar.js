import React, { Component } from "react";
import SickButton from "../styles/SickButton";
import styled from "styled-components";
import withContainers from "../wrappers/withContainer";
import { Global as globalState } from "./Global";
import ToolbarOverlay from "./ToolbarOverlay";
import BlockList from "./BlockList";
import btoa from "btoa";
import Clipboard from "react-clipboard.js";

// Blocks
import SimpleTextBlock from "./SimpleTextBlock";
import PinBlock from "./PinBlock";

// const ToolbarDiv = styled.div`
//   width: 100%;
//   max-width: 300px;
//   z-index: 10;
//   background-color: #d2ddec;
//   padding: 40px;
//   position: relative;

//   p {
//     margin: 0px;
//   }
// `;

class ToolbarDiv extends Component {
  render() {
    return (
      <div className="container relative w-1/5 flex flex-col  ml-8">
        {this.props.children}
      </div>
    );
  }
}

class Toolbar extends Component {
  // state = {
  //   base64: btoa(JSON.stringify(this.props.test.state)),
  // };

  state = {
    base64: ""
  };

  showBlocks = () => {
    //place component in state
    this.props.test.putComponentInToolbar(<BlockList />);

    //open toolbar
    this.props.test.toggleToolbarOverlay();
  };

  showCanvasOptions = () => {};

  handlebase64Update = e => {
    this.setState({ base64: e.target.value });
  };

  _updateState = () => {
    this.props.test._loadStateFromHash(this.state.base64);
  };

  _copyState = () => {
    return btoa(JSON.stringify(this.props.test.state));
  };

  render() {
    let canvas = this.props.test;
    // var toolbar = this.props.test.state.toolbar;
    return (
      <ToolbarDiv>
        <button onClick={() => this.showBlocks()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon-add-circle h-12 w-12"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="fill-current text-gray-300"
            />
            <path
              className="fill-current text-gray-500"
              d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"
            />
          </svg>
        </button>
        {canvas &&
          canvas.state.toolbar.map((block, i) => {
            var type = block.type;
            switch (type) {
              case "text":
                return <SimpleTextBlock key={i} block={block} />;
                break;
              case "pin":
                return <PinBlock key={i} block={block} />;
                break;
            }
          })}

        <div className="toolbar_card">
          <div className="flex justify-between mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-4"
            >
              <path
                className="fill-current text-gray-300"
                d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
              />
              <path
                className="fill-current text-gray-500"
                d="M13 15h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z"
              />
              <polygon
                className="fill-current text-gray-500"
                points="14 2 20 8 14 8"
              />
            </svg>
            <p className="toolbar_header">Save</p>
          </div>
          {this.props.test && (
            <>
              <Clipboard
                className="bg-blue-100 text-blue-700 py-2 px-4 rounded "
                data-clipboard-text={this._copyState()}
              >
                <span className="font-bold">Copy State</span>
              </Clipboard>
            </>
          )}

          <textarea onChange={e => this.handlebase64Update(e)} />

          <SickButton onClick={() => this._updateState()}>
            {" "}
            Update State
          </SickButton>
        </div>

        <ToolbarOverlay />
      </ToolbarDiv>
    );
  }
}

export default withContainers([globalState])(Toolbar);
