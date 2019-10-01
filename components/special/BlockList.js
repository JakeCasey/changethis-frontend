import withContainers from '../wrappers/withContainer';
import { Global as globalState } from './Global';
import React, { Component } from 'react';
import SickButton from '../styles/SickButton';

class BlockList extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <>
        <SickButton onClick={() => this.props.test.addSimpleTextBlock()}>
          Add Simple Text Block
        </SickButton>
        <SickButton onClick={() => this.props.test.addPinBlock()}>
          Add Pin Block
        </SickButton>
      </>
    );
  }
}

export default withContainers([globalState])(BlockList);
