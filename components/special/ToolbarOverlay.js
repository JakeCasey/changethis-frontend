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
                  className="absolute bottom-0 left-0 right-0 top-0 bg-white"
                  style={props}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-add-circle h-12 w-12"
                    viewBox="0 0 24 24"
                    onClick={() =>
                      this.props.globalState.toggleToolbarOverlay()
                    }
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="fill-current text-gray-300"
                    ></circle>

                    <path
                      d="M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z"
                      className="fill-current text-gray-500"
                    ></path>
                  </svg>
                  <div className="flex flex-col my-4 py-8 px-8 mt-16 shadow absolute bottom-0 left-0 right-0 top-0">
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
