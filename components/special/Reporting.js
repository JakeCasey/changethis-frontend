import Error from '../ErrorMessage';
import React, { Component } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';

import withContainers from '../wrappers/withContainer';
import Global from './Global';

import SickButton from '../styles/SickButton';
import styled from 'styled-components';
import DesignCanvas from './DesignCanvas';
import Toolbar from './Toolbar.js';
import { Url } from 'url';
import { frontend, prodFrontend } from '../../config';

const Frame = styled.iframe`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  max-width: ${props => props.width};
`;

const WorkArea = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const UrlBar = styled.div`
  display: flex;
  padding: 40px 0px;
`;

const URL = styled.input`
  width: 100%;
`;
const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  min-width: 1000px;
  overflow-y: hidden;
`;

const Test = props => {
  var router = useRouter();

  return (
    <div>
      <p>Test</p>
      {JSON.stringify(router.query)}
      {props.children}
    </div>
  );
};

const frontendUrl =
  process.env.NODE_ENV === 'development' ? frontend : prodFrontend;

class Reporting extends Component {
  state = {
    url: 'http://bugherd.com',
    urlSelected: frontendUrl + '/api/proxy?url=aHR0cDovL2J1Z2hlcmQuY29t',
  };

  reloadIframe = () => {
    var urlString = frontendUrl + '/api/proxy?url=' + btoa(this.state.url);

    this.props.Global.setCurrentIframe(urlString);

    this.setState({ urlSelected: urlString });
  };

  updateUrl = e => {
    var url = e.target.value;
    this.setState({ url });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.reloadIframe();
    }
  };

  handleScroll = e => {};

  render() {
    // if (!this.props.Global) return <p>Loading...</p>;
    return (
      <div>
        <UrlBar>
          <URL
            value={this.state.url}
            onChange={e => {
              this.updateUrl(e);
            }}
            onKeyDown={e => this.handleKeyDown(e)}
            type="text"
          />
          <SickButton
            onClick={() => {
              this.reloadIframe();
            }}
          >
            Go
          </SickButton>
        </UrlBar>
        <WorkArea>
          <CanvasContainer>
            {this.props.Global.state.overIframe.map((OverIframe, i) => {
              var OverIframeComponent = OverIframe.component;
              return <OverIframeComponent key={i} id={OverIframe.belongsTo} />;
            })}{' '}
            <Frame
              id="iframe"
              width={this.props.Global.state.iframe.width}
              src={this.props.Global.state.currentIframe}
            />
            {/* <DesignCanvas /> */}
          </CanvasContainer>
          <Toolbar />
        </WorkArea>
      </div>
    );
  }
}

export default withContainers([Global])(Reporting);
