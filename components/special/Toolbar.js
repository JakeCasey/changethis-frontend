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
      <div className="container w-1/5 py-8 px-16">{this.props.children}</div>
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

  render() {
    let canvas = this.props.test;
    // var toolbar = this.props.test.state.toolbar;
    return (
      <ToolbarDiv>
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

        <SickButton onClick={() => this.showBlocks()}>Add Block</SickButton>
        <p ref={textarea => (this.textArea = textarea)}>{}</p>
        {this.props.test && (
          <Clipboard
            component={SickButton}
            data-clipboard-text={btoa(JSON.stringify(this.props.test.state))}
          >
            copy application state to clipboard
          </Clipboard>
        )}

        <textarea onChange={e => this.handlebase64Update(e)} />

        <SickButton onClick={() => this._updateState()}>
          {" "}
          Update State From String
        </SickButton>

        <ToolbarOverlay />

        {/* <ToolbarOverlay>
          <SickButton
            onClick={() => {
              canvas.addPath();
            }}
          >
            Add Rectangle
          </SickButton>
          <SickButton
            onClick={() => {
              canvas.clear();
            }}
          >
            Clear
          </SickButton>
          <SickButton
            onClick={() => {
              canvas.addArrow();
            }}
          >
            Add Arrow
          </SickButton>
        </ToolbarOverlay> */}
      </ToolbarDiv>
    );
  }
}

export default withContainers([globalState])(Toolbar);
