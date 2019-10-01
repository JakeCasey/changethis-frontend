import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Global as globalState } from './Global';
import withContainers from '../wrappers/withContainer';
import styled from 'styled-components';

const Tip = styled.div`
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
  background: white;
`;

class TooltipWrapper extends Component {
  render() {
    return <Tip>{this.props.children}</Tip>;
  }
}
export default TooltipWrapper;
