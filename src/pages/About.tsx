import styled from 'styled-components'
import bgAbout from "assets/images/bg-about.png"
import bgAbout2 from "assets/images/bg-about-2.png"
import titleLeft2 from "assets/images/title-left-2.png"
import titleRight2 from "assets/images/title-right-2.png"
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleAbout from "assets/images/title-about.png"
import frameFullAbout from "assets/images/frame-full-about.png"
import bgVideo from "assets/images/bg-video.png"
import frameVideo from "assets/images/frame-video.png"
import frameVideo2 from "assets/images/frame-video-2.png"
import playBt from "assets/images/play-bt.png"
import { useEffect, useRef, useState } from 'react'
import { breakpointsMedias } from 'configs/breakpoints'
import YouTube from 'react-youtube'

const About = () => {
    const [muted, setMuted] = useState<boolean>(true);
    const [showBt, setShowBt] = useState<boolean>(true);
    const playerRef = useRef<any>(null);

    const playVideo = async () => {
        // console.log("????")
        if (playerRef?.current?.internalPlayer) {
            playerRef?.current?.internalPlayer?.playVideo();
        }
    }

    const pauseVideo = async () => {
        if (playerRef?.current?.internalPlayer) {
            let checkPlay = await playerRef.current.internalPlayer.getPlayerState();
            // console.log({ checkPlay })
            if (checkPlay !== 1) {
                playerRef.current.internalPlayer.playVideo();
            } else {
                playerRef.current.internalPlayer.pauseVideo();
            }
        }
        //  playerRef?.current?.internalPlayer.getPlayerState() !== 1) {
        //     console.log("ad")
        //    
        // } else {
        //     console.log("ax")
        //     playerRef.current?.internalPlayer.pauseVideo();
        // }
    }

    useEffect(() => {

    }, [])

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
        <div className="container appear">
            <div className="about-video">
                <img src={frameVideo} alt="" className='av-border' />
                <img src={frameVideo2} alt="" className='av-border-2' onClick={pauseVideo} />
                <div className="av-video" >
                    {/* <iframe width="100%" height="100%" id="video-cover-top"
                            src="https://www.youtube.com/embed/sv_Tb8jMPG0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe> */}
                    <YouTube
                        videoId={"sv_Tb8jMPG0"}                  // defaults -> ''
                        className={""}                // defaults -> ''
                        iframeClassName={""}          // defaults -> ''
                        // defaults -> {}
                        title={"About Liferies"}                    // defaults -> ''
                        loading={"lazy"}
                        ref={playerRef}                 // defaults -> undefined
                        opts={{
                            playerVars: {
                                'playsinline': 1,
                                "loop": 1,
                                "showinfo": 0,
                                "controls": 0,
                                "autoplay": 0,
                                "mute": 0,
                                "playlist": "sv_Tb8jMPG0",
                                "modestbranding": 1,
                                "rel": 0
                            }
                        }}
                        onStateChange={(e) => {
                            let checkPlay = e.target.getPlayerState()
                            if (checkPlay !== 1) {
                                setShowBt(true)
                            } else {
                                setShowBt(false)
                            }
                        }}                     // defaults -> {}
                    />
                </div>
                {/* <video src="https://www.youtube.com/watch?v=sv_Tb8jMPG0" autoPlay muted={muted} playsInline loop poster={bgVideo}></video> */}
                {showBt && <div className='av-bt' onClick={playVideo}>
                    <img src={playBt} alt="" />
                </div>}

            </div>
            <div className="about-text">
                <img src={frameFullAbout} alt="" />
                {/* <span className='size-0 color-gray'>L ife Rises is an Fantasy AAA MMORPG with multiple challenges and dangerous monstrosities, giant bosses and massive quest system to keep players engaged while on their path to discover t heir origins as well as the forces behind the current state of the Life Rises World.</span>
                <img src="" alt="" />
                <span className="size-0 color-gray">T he game aim to be the pioneering project in the revolution of bringing AAA MMORPG games from web2 to web3 and focusing on community benefits.</span> */}
            </div>
        </div>
        <div className='shadow-bottom'></div>
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
        max-width: 1520px;
        ${breakpointsMedias.max1920} {
            max-width: 1450px; 
        }
        .about-video {
            width: 39.22vw;
            height: 30vw;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            .av-video {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                height: 86%;
                z-index: 0;
                display: flex;
                align-items: center;
                > div {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    > iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
               
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
                z-index: 1;
                > img {
                    width: 100%;
                    height: auto;
                }
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
    .shadow-bottom {
        display: none;
    }
    ${breakpointsMedias.max767} {
        background-image: url(${bgAbout2});
    }
    ${breakpointsMedias.max1199} {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;
        align-items: center;
        /* background-image: url(${bgAbout2}); */
        background-size: cover;
        padding-bottom: 99px;
        .hp-title {
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            align-items: center;
            .hpt-text {
            min-width: 238px;
            width: 50%;
            height: auto;
            margin: 0 12px;
                > img {
                        width: 100%;
                        height: auto;
                }
            }
            .hpt-side {
                flex: 1;
                &:first-child {
                    > img {
                        content: url(${titleLeft2});
                    }
                }
                &:last-child {
                    > img {
                        content: url(${titleRight2});
                    }
                }
                > img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 0 16px;
            margin-top: 82px;
            .about-video {
                width: 600px;
                height: 457px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                margin-bottom: 45px;
                ${breakpointsMedias.max767} {
                    width: 100%;
                    height: 69.5vw;
                }
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
                width: 100%;
                height: fit-content;
                margin-left: 0;
                max-width: 458px;
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
        .shadow-bottom {
            display: flex;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 120px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        }
    }
`