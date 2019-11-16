import Error from "../ErrorMessage";
import React, { Component } from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";

import withContainers from "../wrappers/withContainer";
import { Global as globalState } from "./Global";

import SickButton from "../styles/SickButton";
import styled from "styled-components";
import DesignCanvas from "./DesignCanvas";
import Toolbar from "./Toolbar.js";
import { Url } from "url";
import { frontend, prodFrontend } from "../../config";

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
  process.env.NODE_ENV === "development" ? frontend : prodFrontend;

class Reporting extends Component {
  state = {
    url: "http://bugherd.com",
    urlSelected: frontendUrl + "/api/proxy?url=aHR0cDovL3d3dy5nb29nbGUuY29t"
  };

  reloadIframe = () => {
    var urlString = frontendUrl + "/api/proxy?url=" + btoa(this.state.url);
    this.props.test.setCurrentIframe(urlString);

    this.setState({ urlSelected: urlString });
  };

  updateUrl = e => {
    var url = e.target.value;
    this.setState({ url });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.reloadIframe();
    }
  };

  handleScroll = e => {};

  render() {
    // if (!this.props.test) return <p>Loading...</p>;
    return (
      <div>
        <UrlBar>
          <URL
            className="bg-gray-100 px-8 mr-8 rounded"
            value={this.state.url}
            onChange={e => {
              this.updateUrl(e);
            }}
            onKeyDown={e => this.handleKeyDown(e)}
            type="text"
          />
          <button
            className=" text-green-700 mr-4 rounded "
            onClick={() => {
              this.reloadIframe();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-arrow-thick-right-circle w-16 h-16"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                className="fill-current text-green-300"
              ></circle>
              <path
                d="M12 14H7a1 1 0 01-1-1v-2a1 1 0 011-1h5V8a1 1 0 011.7-.7l4 4a1 1 0 010 1.4l-4 4A1 1 0 0112 16v-2z"
                className="text-green-500 fill-current"
              ></path>
            </svg>
          </button>
        </UrlBar>
        <WorkArea>
          <CanvasContainer>
            {this.props.test &&
              this.props.test.state.overIframe.map((OverIframe, i) => {
                var OverIframeComponent = OverIframe.component;
                return (
                  <OverIframeComponent key={i} id={OverIframe.belongsTo} />
                );
              })}{" "}
            {this.props.test && this.props.test.state && (
              <Frame
                id="iframe"
                width={this.props.test.state.iframe.size.width}
                src={this.props.test.state.currentIframe}
              />
            )}
            {/* <DesignCanvas /> */}
          </CanvasContainer>
          <Toolbar />
        </WorkArea>
      </div>
    );
  }
}

export default withContainers([globalState])(Reporting);
