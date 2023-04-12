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

const checkIOS = () => {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}




const isIOS = checkIOS()

const Homepage = () => {
    const { width } = useWidthScreen()
    const { t } = useTranslation();
    const [muted, setMuted] = useState<boolean>(true)


    const checkBrowserCanPlayWebm = () => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            let nAgt = navigator.userAgent;
            let verOffset = 0;
            let ix = 0;
            let fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1) { fullVersion = nAgt.substring(verOffset + 8); }
            if ((ix = fullVersion.indexOf(";")) != -1)
                fullVersion = fullVersion.substring(0, ix);
            if ((ix = fullVersion.indexOf(" ")) != -1)
                fullVersion = fullVersion.substring(0, ix);

            let majorVersion = parseInt('' + fullVersion, 10);
            if (isNaN(majorVersion)) {
                fullVersion = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }
            if (majorVersion >= 15) {
                return true
            }
            return false
        }
        return true
    }

    return (<Wrap>
        {width >= 768 ? <>
            <video src={(!isIOS && checkBrowserCanPlayWebm()) ? videoMeo : videoMeo2} autoPlay muted={muted} playsInline loop poster={bgHome2} ></video>
            <div className="bt-mute" onClick={() => {
                setMuted(!muted)
            }}>
                <img src={muted ? imgMute : imgMute2} alt="" />
            </div>
        </>
            : <div className='home-text'>
                <img src={imgTextHome} alt="" />
                <span className="">{t("homeText")}</span>
            </div>}
    </Wrap>)
}

export default Homepage

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    background-image: url(${bgHomeMobile});
    background-size: cover;
    background-position: center center;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    video {
        width: 100%;
    }
    .home-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        > img {
            width: 80%;
            max-width: 294px;
        }
        span {
            font-family: 'Orbitron';
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 28px;
            max-width: 280px;
            text-align: center;
            width: 90%;
            margin-bottom: 55%;
        }
    }
    .bt-mute {
        position: fixed;
        bottom: 60px;
        right: 60px;
        cursor: pointer;
        img {
            width: 80px;
            height: auto;
        }
    }
    ${breakpointsMedias.min768} {
        /* background-image: url(${bgHome2}); */
        background-image: none;
        margin-top: -60px;
    }
    ${breakpointsMedias.min1200} {
        margin-top: -140px;
        background-image: none;
        background-color: #000000;
    }
`

