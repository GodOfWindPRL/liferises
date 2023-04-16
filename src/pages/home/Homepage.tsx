import bgHomeMobile from 'assets/images/bg-home-mobile.png'
import bgHome2 from 'assets/images/bg-home-2.png'
import imgMute from 'assets/images/bt-mute.png'
import imgMute2 from 'assets/images/bt-muted.png'
import imgTextHome from 'assets/images/text-home.png'
import styled from 'styled-components'
import { breakpointsMedias } from 'configs/breakpoints'
import videoMeo from 'assets/video/meo-video.webm'
import videoMeo2 from 'assets/video/meo-video-2.mp4'
import { useWidthScreen } from 'helpers/hooks/useScreen'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Banner from 'pages/Banner'
import About from 'pages/About'
import Story from 'pages/Story'
import Character from 'pages/Character'
import Feature from 'pages/Feature'
import TokenMetric from 'pages/TokenMetric'

const Homepage = () => {

    return (<Wrap>
        <Banner />
        <About />
        <Story />
        <Character />
        <Feature />
        <TokenMetric />
    </Wrap>)
}

export default Homepage

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${breakpointsMedias.min768} {
    }
`

