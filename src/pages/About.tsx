import styled from 'styled-components'
import bgAbout from "assets/images/bg-about.png"
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleAbout from "assets/images/title-about.png"
import frameAbout from "assets/images/frame-about.png"

const About = () => {
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
                <video src=""></video>
                <img src="" alt="" className='av-border' />
                <img src="" alt="" className='av-border-2' />
                <img src="" alt="" className='av-bt' />
            </div>
            <div className="about-text">
                <span className='size-0 color-gray'>L ife Rises is an Fantasy AAA MMORPG with multiple challenges and dangerous monstrosities, giant bosses and massive quest system to keep players engaged while on their path to discover t heir origins as well as the forces behind the current state of the Life Rises World.</span>
                <img src="" alt="" />
                <span className="size-0 color-gray">T he game aim to be the pioneering project in the revolution of bringing AAA MMORPG games from web2 to web3 and focusing on community benefits.</span>
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
        .about-video {
            width: 39.22vw;
            height: 30vw;
            display: flex;
            align-items: center;
            justify-content: center;
            > video {

            }
            .av-border {
                z-index: 1;
                width: 100%;
                height: 100%;
            }
            .av-border-2 {
                z-index: 1;
                width: 100%;
                height: 100%;
            }
            .av-bt {
                width: 13.23%;
                height: auto;
            }
        }
        .about-text {
            width: 527px;
            height: 655px;
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            background-image: url(${frameAbout});
            background-size: 100% auto;
            background-position: top center;
            padding: 0 73px;
            justify-content: center;
            text-align: center;
        }
    }
`