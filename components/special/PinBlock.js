import withContainers from '../wrappers/withContainer';

import { Global as globalState } from './Global';
import React, { Component } from 'react';

import SickButton from '../styles/SickButton';

class PinBlock extends Component {
  state = {};

  render() {
    var block = this.props.block;
    return (
      <>
        {this.props.test &&
          this.props.test.state.pins.map((p, index) => {
            if (p.belongsTo == this.props.block.id) {
              return <p key={index}>{p.comment}</p>;
            }
          })}
        <SickButton
          onClick={() =>
            this.props.test.togglePinPlacement(this.props.block.id)
          }
        >
          {this.props.test && this.props.test.state.isPlacingPin
            ? 'Stop Placing Pins'
            : 'Place Pin'}
        </SickButton>
      </>
    );
  }
}

export default withContainers([globalState])(PinBlock);
