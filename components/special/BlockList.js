import withContainers from '../wrappers/withContainer';
import Global from './Global';
import React, { Component } from 'react';
import SickButton from '../styles/SickButton';

class BlockList extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <>
        <SickButton onClick={() => this.props.Global.addSimpleTextBlock()}>
          Add Simple Text Block
        </SickButton>
        <SickButton onClick={() => this.props.Global.addPinBlock()}>
          Add Pin Block
        </SickButton>
      </>
    );
  }
}

export default withContainers([Global])(BlockList);
