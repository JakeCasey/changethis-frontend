import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-spring";
import withContainers from "../wrappers/withContainer";
import { Global as globalState } from "./Global";

const ToolbarOverlayDiv = styled.div`
  transform: translate3d(${props => props.transform3d} + "%", 0, 0);
`;

class ToolbarOverlay extends Component {
  render() {
    return (
      <div>
        {this.props.globalState && (
          <Transition
            items={this.props.globalState.state.showToolbarOverlay}
            from={{
              opacity: 0
            }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <ToolbarOverlayDiv
                  className="absolute top-0 bottom-0 left-0 right-0 bg-white"
                  style={props}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 icon-add-circle"
                    viewBox="0 0 24 24"
                    onClick={() =>
                      this.props.globalState.toggleToolbarOverlay()
                    }
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="text-gray-300 fill-current"
                    ></circle>

                    <path
                      d="M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z"
                      className="text-gray-500 fill-current"
                    ></path>
                  </svg>
                  <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col px-8 py-8 my-4 mt-16 rounded-lg shadow">
                    {this.props.globalState.state.toolbarOverlayContents}
                  </div>
                </ToolbarOverlayDiv>
              ))
            }
          </Transition>
        )}
      </div>
    );
  }
}

export default withContainers([globalState])(ToolbarOverlay);
