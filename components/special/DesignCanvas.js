import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';
import styled from 'styled-components';
import { Container, Subscribe } from 'unstated';
import withContainers from '../wrappers/withContainer';
import Global from './Global';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
`;

class DesignCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  static defaultProps = {
    width: 1440,
    height: 1000,
  };

  state = {
    canvas: null,
  };

  componentDidMount() {
    this.props.Global.instantiateCanvas(this);
  }

  render() {
    const { width, height } = this.props;
    var canvas = this.props.Global;
    return (
      <CanvasContainer>
        <canvas ref={c => (this.c = c)} width={width} height={height} />
        {/* {canvas.state.canvas} */}
      </CanvasContainer>
    );
  }
}

export default withContainers([Global])(DesignCanvas);
