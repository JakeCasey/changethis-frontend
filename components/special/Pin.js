import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Global as globalState } from './Global';
import styled from 'styled-components';
import { Tooltip } from 'react-tippy';
import TooltipWrapper from './TooltipWrapper';
import Comment from './Comment';

const PinDiv = styled.div`
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  background-color: lightskyblue;
  position: absolute;
  top: ${props => props.pin.y + parseInt(props.pin.scrollPosition.y) + 'px'};
  left: ${props => props.pin.x + 'px'};
  transform: translateX(${props => -props.width / 2 + 'px'})
    translateY(${props => -props.height / 2 + 'px'});
  pointer-events: auto;
`;

const Pop = styled.div`
  width: 300px;
  background: blue;
`;

class Pin extends Component {
  render() {
    return (
      <PinDiv key={this.props.key} width={25} height={25} pin={this.props.pin}>
        <Tooltip
          trigger="click"
          interactive={true}
          html={
            <TooltipWrapper>
              <Comment pin={this.props.pin} global={this.props.Global} />
            </TooltipWrapper>
          }
        >
          <div style={{ width: '100%', height: '100%' }} />
        </Tooltip>
      </PinDiv>
    );
  }
}

export default Pin;
