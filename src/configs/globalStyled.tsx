import { createGlobalStyle } from "styled-components";
import { breakpointsMedia } from "./breakpoints";
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
  .scrollbar {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
            width: 4px !important;
            height: 4px !important;
            margin-top:10px;
            border-radius: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #fe8c0033 !important;
            border-radius: 6px !important;
        }
        &::-webkit-scrollbar-thumb {
            background: ${configColor.colorPrimary} !important;
            border-radius: 6px !important;
        }
  }
  .container2{
      width:100%;
      padding-left:16px;
      padding-right:16px;
      margin-left:auto;
      margin-right:auto;
      /* max-width:1170px; */
      &.full{
        max-width:100vw;
      }
  }
  .container {
    width: 100%;
    padding: 0 16px;
  }
  ${breakpointsMedia.mobileS}{
      .container2{
        padding-left:10px;
        padding-right:10px;
      }
  }
  ${breakpointsMedia.landscape}{
        .container2{
            /* max-width:100%; */
            padding:0 24px;
        }
        /* :root{
          font-size:16px;
        }
        body {
          font-size:16px;
        } */
    }
  ${breakpointsMedia.tablet}{
  }
  ${breakpointsMedia.desktop}{
        .container2{
            padding:0 40px;
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
        .container2{
            /* max-width:1150px; */
            padding:0 40px;
        }
    }
  ${breakpointsMedia.xxLargeDesktop}{
        .container2{
            max-width:1416px;
            padding: 0;
        }
    }
`;
