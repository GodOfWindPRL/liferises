import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from 'assets/images/logo.png'

const LoadingScreen = () => {
    return (
        <Wrap>
            <img src={logo} alt="logo" className='w-[40px] sm:w-[70px]' />
        </Wrap>
    )
}

export default LoadingScreen
const zoomAnimation = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`
const Wrap = styled.div`
    position: fixed;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    animation: ${zoomAnimation} 0.5s ease-in-out infinite both;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    width: 100%;
    height: 100%;
    background: #1E1E1E;
    img {
      width: 50vw;
      height: auto;
    }
`