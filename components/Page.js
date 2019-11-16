import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  primary: "lightskyblue",
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "100vw",
  bs: "0 5px 15px hsla(0, 0%, 0%, 0.2)",
  borders: "4px",
  button_borders: "4px",
  button_color: "lightskyblue"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */

  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter-Regular.woff') format('woff');
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
    /* font-family:  */
   /* font-family: 'radnika_next' */
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <div className="p-12">
            <Header />
            {this.props.children}
          </div>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
