import withContainers from "../wrappers/withContainer";

import { Global as globalState } from "./Global";
import React, { Component } from "react";
import { Subscribe } from "unstated";

import styled from "styled-components";
import shortid from "shortid";

import SickButton from "../styles/SickButton";

const PinOverlayDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  pointer-events: ${props => (props.showPointerEvents ? "auto" : "none")};
`;

class PinOverlay extends Component {
  state = {
    showPointerEvents: true,
    pin: { x: "", y: "" }
  };

  componentDidMount() {
    this.setState({
      pin: {
        belongsTo: this.props.id,
        x: "",
        y: "",
        comment: ""
      }
    });
  }

  _onMouseMove = e => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.

    //get scroll position;
    var scroll = 0;

    var iframeScrollPosition = document
      .getElementById("iframe")
      .contentWindow.document.getElementById("iframeScrollPosition");

    if (iframeScrollPosition) {
      scroll = iframeScrollPosition.getAttribute("y");
    }

    // this.setState({ pin: { ...this.state.pin, x: e.screenX, y: e.screenY } });
    this.setState({
      pin: { ...this.state.pin, x: x, y: y, scrollPosition: { y: scroll } }
    });
  };

  _handlePinClick = Global => {
    Global._placePin(this.state.pin);

    // Global._placePin(this.state.pin);
  };

  _removePointerEvents = () => {
    this.setState({ showPointerEvents: false });
  };

  render() {
    var block = this.props.block;
    return (
      <div>
        <Subscribe to={[globalState]}>
          {globalState => (
            <PinOverlayDiv
              showPointerEvents={this.state.showPointerEvents}
              onClick={() => this._handlePinClick(globalState)}
              onMouseMove={e => this._onMouseMove(e)}
            >
              {this.state.pin.x}" "{this.state.pin.y}
            </PinOverlayDiv>
          )}
        </Subscribe>
      </div>
    );
  }
}

// export default withContainers([globalState])(PinOverlay);
export default PinOverlay;
