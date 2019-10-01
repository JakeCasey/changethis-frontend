import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-spring';
import withContainers from '../wrappers/withContainer';
import Global from './Global';

const ToolbarOverlayDiv = styled.div`
  padding: 40px;
  background: #edf1f5;
  position: absolute;
  transform: translate3d(${props => props.transform3d} + '%', 0, 0);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

class ToolbarOverlay extends Component {
  render() {
    return (
      <div>
        {this.props.Global.state && (
          <Transition
            items={this.props.Global.state.showToolbarOverlay}
            from={{
              opacity: 0,
            }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <ToolbarOverlayDiv style={props}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="arcs"
                    onClick={() => this.props.Global.toggleToolbarOverlay()}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  {this.props.Global.state.toolbarOverlayContents}
                </ToolbarOverlayDiv>
              ))
            }
          </Transition>
        )}
      </div>
    );
  }
}

export default withContainers([Global])(ToolbarOverlay);
