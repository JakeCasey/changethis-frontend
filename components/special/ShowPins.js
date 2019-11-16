import withContainers from "../wrappers/withContainer";

import { Global as globalState } from "./Global";
import React, { Component } from "react";
import { Subscribe } from "unstated";

import { getIframeScrollPosition } from "../../lib/helpers";

import styled from "styled-components";

import SickButton from "../styles/SickButton";
import Pin from "./Pin";

const ShowPinsDiv = styled.div`
  position: absolute;
  top: ${props => (props.scrollTop ? props.scrollTop : "0px")};
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  pointer-events: none;
`;

var timeout = "";

class ShowPins extends Component {
  state = {
    scrollTop: 0
  };

  componentDidMount() {
    //get initial scroll pos

    //TODO: THIS NEEDS TO WAIT FOR IFRAME TO EXIST
    setTimeout(() => {
      this._updateScrollPosition();

      //attach scroll listener
      document
        .getElementById("iframe")
        .contentWindow.document.addEventListener(
          "scroll",
          this._handleScroll,
          false
        );
    }, 2000);
  }

  //polling is almost accurate but needs a trail off perhaps an interval or a while statement
  //that runs several more times over a few seconds.

  _updateScrollPosition = event => {
    var scroll = "";
    var iframeScrollPosition = document
      .getElementById("iframe")
      .contentWindow.document.getElementById("iframeScrollPosition");

    if (iframeScrollPosition.getAttribute("y")) {
      scroll = -iframeScrollPosition.getAttribute("y");
    } else {
      scroll = 0;
    }

    this.setState({ scrollTop: scroll + "px" });
  };

  _handleScroll = me => {
    window.clearTimeout(timeout);
    timeout = setTimeout(() => {
      this._updateScrollPosition();
      setTimeout(this._updateScrollPosition(), 150);
    }, 200);
    this._updateScrollPosition();
  };

  componentWillUnmount() {
    // window.removeEventListener('scroll', this._updateScrollPosition, false);
  }
  render() {
    var block = this.props.block;
    return (
      <div>
        <Subscribe to={[globalState]}>
          {test => (
            <ShowPinsDiv scrollTop={this.state.scrollTop}>
              {test.state.pins.map((pin, i) => {
                return <Pin key={i} pin={pin} test={test} />;
              })}
            </ShowPinsDiv>
          )}
        </Subscribe>
      </div>
    );
  }
}

// export default withContainers([globalState])(ShowPins);
export default ShowPins;
