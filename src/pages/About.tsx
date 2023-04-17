import styled from 'styled-components'
import bgAbout from "assets/images/bg-about.png"
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleAbout from "assets/images/title-about.png"
import frameAbout from "assets/images/frame-about.png"
import frameFullAbout from "assets/images/frame-full-about.png"
import bgVideo from "assets/images/bg-video.png"
import frameVideo from "assets/images/frame-video.png"
import frameVideo2 from "assets/images/frame-video-2.png"
import { useState } from 'react'

const About = () => {
    const [muted, setMuted] = useState<boolean>(true)

    return <Wrap>
        <div className="hp-title">
            <div className='hpt-side'>
                <img src={titleLeft} alt="" />
            </div>
            <div className='hpt-text' >
                <img src={titleAbout} alt="" />
            </div>
            <div className='hpt-side'>
                <img src={titleRight} alt="" />
            </div>



        </div>
        <div className="container">
            <div className="about-video">
                <video src="" autoPlay muted={muted} playsInline loop poster={bgVideo}></video>
                <img src={frameVideo} alt="" className='av-border' />
                <img src={frameVideo2} alt="" className='av-border-2' />
                <img src="" alt="" className='av-bt' />
            </div>
            <div className="about-text">
                <img src={frameFullAbout} alt="" />
                {/* <span className='size-0 color-gray'>L ife Rises is an Fantasy AAA MMORPG with multiple challenges and dangerous monstrosities, giant bosses and massive quest system to keep players engaged while on their path to discover t heir origins as well as the forces behind the current state of the Life Rises World.</span>
                <img src="" alt="" />
                <span className="size-0 color-gray">T he game aim to be the pioneering project in the revolution of bringing AAA MMORPG games from web2 to web3 and focusing on community benefits.</span> */}
            </div>
        </div>
    </Wrap>

}

export default About
const Wrap = styled.div`
    width: 100%;
    height: 50.5vw;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-image: url(${bgAbout});
    background-size: cover;
    .hp-title {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        align-items: center;
        .hpt-text {
           min-width: 494px;
           width: 25.73%;
           height: auto;
           margin: 0 12px;
            > img {
                    width: 100%;
                    height: auto;
            }
        }
        .hpt-side {
            flex: 1;
            > img {
                width: 100%;
                height: auto;
            }
        }
    }
    .container {
        display: flex;
        justify-content: center;
        .about-video {
            width: 39.22vw;
            height: 30vw;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            > video {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                height: 86%;
            }
            .av-border {
                position: absolute;
                top: 53%;
                left: 50%;
                z-index: 1;
                width: 110%;
                height: 110%;
                transform: translate(-50%, -50%);
            }
            .av-border-2 {
                z-index: 1;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                height: calc(100% - 19px);
            }
            .av-bt {
                width: 13.23%;
                height: auto;
            }
        }
        .about-text {
            width: 27.45vw;
            height: fit-content;
            margin-left: 40px;
            img {
                width: 100%;
                height: auto;
            }
            /* height: 34.11vw;
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            background-image: url(${frameFullAbout});
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;
            padding: 0 73px;
            justify-content: center;
            text-align: center; */
        }
    }
`