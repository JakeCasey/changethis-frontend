import React, { Component } from 'react';
import SickButton from '../styles/SickButton';
import styled from 'styled-components';
import withContainers from '../wrappers/withContainer';
import Global from './Global';
import ToolbarOverlay from './ToolbarOverlay';
import BlockList from './BlockList';
import btoa from 'btoa';
import Clipboard from 'react-clipboard.js';

// Blocks
import SimpleTextBlock from './SimpleTextBlock';
import PinBlock from './PinBlock';

const ToolbarDiv = styled.div`
  width: 100%;
  max-width: 300px;
  z-index: 10;
  background-color: #d2ddec;
  padding: 40px;
  position: relative;

  p {
    margin: 0px;
  }
`;

class Toolbar extends Component {
  // state = {
  //   base64: btoa(JSON.stringify(this.props.Global.state)),
  // };

  state = {
    base64: '',
  };

  showBlocks = () => {
    //place component in state
    this.props.Global.putComponentInToolbar(<BlockList />);

    //open toolbar
    this.props.Global.toggleToolbarOverlay();
  };

  showCanvasOptions = () => {};

  handlebase64Update = e => {
    this.setState({ base64: e.target.value });
  };

  _updateState = () => {
    this.props.Global._loadStateFromHash(this.state.base64);
  };

  render() {
    var canvas = this.props.Global;
    var toolbar = this.props.Global.state.toolbar;
    return (
      <ToolbarDiv>
        {this.props.Global &&
          this.props.Global.state.toolbar.map((block, i) => {
            var type = block.type;
            switch (type) {
              case 'text':
                return <SimpleTextBlock key={i} block={block} />;
                break;
              case 'pin':
                return <PinBlock key={i} block={block} />;
                break;
            }
          })}

        <SickButton onClick={() => this.showBlocks()}>Add Block</SickButton>
        <p ref={textarea => (this.textArea = textarea)}>{}</p>
        {this.props.Global && (
          <Clipboard
            component={SickButton}
            data-clipboard-text={btoa(JSON.stringify(this.props.Global.state))}
          >
            copy to clipboard
          </Clipboard>
        )}

        <textarea onChange={e => this.handlebase64Update(e)} />

        <SickButton onClick={() => this._updateState()}>
          {' '}
          Update State From String
        </SickButton>

        {/* <ToolbarOverlay /> */}

        {/* <ToolbarOverlay>
          <SickButton
            onClick={() => {
              canvas.addPath();
            }}
          >
            Add Rectangle
          </SickButton>
          <SickButton
            onClick={() => {
              canvas.clear();
            }}
          >
            Clear
          </SickButton>
          <SickButton
            onClick={() => {
              canvas.addArrow();
            }}
          >
            Add Arrow
          </SickButton>
        </ToolbarOverlay> */}
      </ToolbarDiv>
    );
  }
}

export default withContainers([Global])(Toolbar);
