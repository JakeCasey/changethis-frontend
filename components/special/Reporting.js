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
import { endpoint, prodEndPoint } from "../../config";

const backendUrl =
  process.env.NODE_ENV === "development" ? endpoint : prodEndPoint;

const WorkArea = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const UrlBar = styled.div`
  display: flex;
`;

const URL = styled.input`
  width: 100%;
`;
const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1100px;
  min-width: 1100px;
  overflow-y: hidden;
`;

// https://tobiasahlin.com/spinkit/
const LoadingContainer = styled.div`
  .sk-folding-cube {
    display: ${props => (props.loading ? "block" : "none")};
    margin: 20px auto;
    width: 40px;
    height: 40px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  .sk-folding-cube .sk-cube:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4299e1;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
    transform: scale(1.1) rotateZ(90deg);
  }
  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
    transform: scale(1.1) rotateZ(180deg);
  }
  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
    transform: scale(1.1) rotateZ(270deg);
  }
  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  @-webkit-keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }

  @keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

const LoadingOverlay = styled.div`
  display: ${props => (props.loading ? "block" : "none")};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

class Reporting extends Component {
  state = {
    url: "http://bugherd.com"
  };

  fetchPage = () => {
    this.props.test.setState({ pageLoading: true });
    this.props.test.fetchPage(this.state.url);
  };

  updateUrl = e => {
    var url = e.target.value;
    this.setState({ url });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.fetchPage();
    }
  };

  handleScroll = e => {};

  stopLoading = () => {
    this.props.test.setState({ pageLoading: false });
  };

  render() {
    // if (!this.props.test) return <p>Loading...</p>;
    return (
      <div>
        <UrlBar className="mb-8">
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
              this.fetchPage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-arrow-thick-right-circle w-10 h-10"
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
              <>
                <LoadingOverlay
                  loading={this.props.test.state.pageLoading}
                  className="bg-gray-100 opacity-75"
                />
                <LoadingContainer
                  className="flex absolute w-full mt-64"
                  loading={this.props.test.state.pageLoading}
                >
                  <div className="sk-folding-cube ">
                    <div className="sk-cube1 sk-cube "></div>
                    <div className="sk-cube2 sk-cube "></div>
                    <div className="sk-cube4 sk-cube "></div>
                    <div className="sk-cube3 sk-cube "></div>
                  </div>
                </LoadingContainer>
                <img
                  style={{ width: "1100px" }}
                  onLoad={() => this.stopLoading()}
                  src={this.props.test.state.urlSelected}
                />
              </>
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
