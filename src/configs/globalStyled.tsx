import { createGlobalStyle } from "styled-components";
import { breakpointsMedia, breakpointsMedias } from "./breakpoints";
import configColor from "./configColor";
export const GlobalStyle = createGlobalStyle`
  :root{
    font-size:14px;
    line-height:1.254;
    letter-spacing: 0.15px;
  }
  body {
    background-color: transparent;
    /* background-color: ${configColor.bgPrimary}; */
    font-size:14px;
    line-height:1.254;
    letter-spacing: 0.15px;
    font-family: 'Orbitron', sans-serif;
  }
  .container {
    width: 100%;
    padding: 0 16px;
    max-width: 1320px;
  }
  ${breakpointsMedias.max1199}{
      .container {
        
      }
  }
  ${breakpointsMedia.largeDesktop}{
        :root {
          font-size:20px;
          letter-spacing: 0;
        }
        body {
          font-size:20px;
          letter-spacing: 0;
        }
    }
`;
