import withContainers from '../wrappers/withContainer';
import Global from './Global';
import React, { Component } from 'react';

class SimpleTextBlock extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <>
        <p>{block.label}</p>
        <p>{block.value}</p>
      </>
    );
  }
}

export default withContainers([Global])(SimpleTextBlock);
