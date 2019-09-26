import React, { Component } from 'react';

import Global from './Global';
import { Subscribe } from 'unstated';
import _ from 'lodash';
import styled from 'styled-components';
import { Provider } from 'unstated';

const Commentarea = styled.textarea`
  width: 100%;
  height: 100%;
`;

class Comment extends Component {
  _getPlaceholder = () => {
    var placeholders = [
      'This needs more SPARKLE.',
      'Can I get this in comic-sans?',
      'I like everything about how this looks, except for how it looks.',
      'How can we “spice” this page up?',
      'Why don’t we add a few more colors into the mix?',
      'This shit is gonna go viral',
      'How about we just “spruce” this up a bit?',
    ];
    return _.sample(placeholders);
    // return 'test';
  };

  _updateComment = (Global, e) => {
    var previousState = Global.state.pins;

    console.log(this.props.pin.id);
    console.log(e.target.value);
    console.log(previousState);
    Global._updatePinCommentByID(
      this.props.pin.id,
      e.target.value,
      previousState,
    );
  };

  render() {
    return (
      <Commentarea
        value={this.props.pin.comment}
        onChange={e => this._updateComment(this.props.global, e)}
        placeholder={this._getPlaceholder()}
      />
    );
  }
}

export default Comment;
