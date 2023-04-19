import styled from 'styled-components'
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleFeature from "assets/images/title-feature.png"
import frameFeature from "assets/images/frame-feature.png"
import iconFeature from "assets/images/feature-icon.png"
import { breakpointsMedias } from 'configs/breakpoints'
import titleLeft2 from "assets/images/title-left-2.png"
import titleRight2 from "assets/images/title-right-2.png"
import frameFeature2 from "assets/images/frame-feature-2.png"
import bgFeature from "assets/images/bg-feature.png"
import bgFeature2 from "assets/images/bg-feature-2.png"

const Feature = () => {
    const dataFeature = [{
        title: "Free play own",
        text: "In-game tokens and digital assets earned by playing the game can be traded for real money."
    }, {
        title: "Crafting",
        text: "With the materials obtained from the game reward, combine NFTs to create a new one."
    }, {
        title: "Upgrading",
        text: "Rank up your character to improve your chances of earning money and game experiences."
    }, {
        title: "Battle",
        text: "Join the intricate System for PVE, PVP, TVT, GVG once your character is strong enough."
    }]

    return <Wrap>
        <div className="hp-title">
            <div className='hpt-side'>
                <img src={titleLeft} alt="" />
            </div>
            <div className='hpt-text' >
                <img src={titleFeature} alt="" />
            </div>
            <div className='hpt-side'>
                <img src={titleRight} alt="" />
            </div>
        </div>
        <div className="container">
            {dataFeature.map((item, index) => <div key={index} className="fe-item appear" >
                <img src={iconFeature} alt="" />
                <span className='size-1 color-golden fi-text-1'>{item.title}</span>
                <span className='size-0 color-gold'>{item.text}</span>
            </div>)}
        </div>
    </Wrap>

}

export default Feature
const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 144px 0 180px 0;
    background-image: url(${bgFeature});
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
        align-items: center;
        justify-content: space-between;
        max-width: 1500px;
        .fe-item {
            width: 300px;
            height: 455px;
            margin-right: 40px;
            position: relative;
            padding: 214px 40px 0 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url(${frameFeature});
            background-size: 100% 100%;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
            > img {
                position: absolute;
                top: 48px;
                left: 50%;
                transform: translateX(-50%);
                width: 65px;
                height: auto;
            }
            > span {
                text-align: center;
            }
            .fi-text-1 {
                margin-bottom: 12px;
            }
            &:hover {
                transform: translateY(-30px);
                > img {
                    animation: rot 1s linear infinite ;
                }
                @keyframes rot {
                    0% {
                        transform: translateX(-50%) rotateY(0deg);
                    }
                    100% {
                        transform: translateX(-50%) rotateY(360deg);
                    }
                }
            }
        }

    }
    ${breakpointsMedias.max1540}{
        .container {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            .fe-item {
                margin: 0 5% 30px 5%;
                &:last-child {
                    margin-right: 5%;
                    margin: 0 5% 30px 5%;
                }
                &:nth-child(2n+2) {

                }
            }
        }
       
    }
    ${breakpointsMedias.max1199} {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 144px 0 180px 0;
        ${breakpointsMedias.max767} {
            padding: 70px 0 90px 0;
        }
        ${breakpointsMedias.max550} {
            background-image: url(${bgFeature2});
        }
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
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .fe-item {
                width: 25vw;
                height: 37vw;
                margin: 0 5vw 30px 5vw;
                padding: 20% 20px 0 20px;
                &:last-child {
                    margin-right: 5vw;
                    margin: 0 5vw 30px 5vw;
                }
                &:nth-child(2n+2) {

                }
                > img {
                    top: 10%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 23%;
                    height: auto;
                    ${breakpointsMedias.max767} {
                        width: 20%;
                    }
                }
                ${breakpointsMedias.max767} {
                    width: 35vw;
                    height: 49.5vw;
                    margin: 0 2vw 30px 2vw;
                    padding: 25% 20px 0 20px;
                    > img {
                        top: 11%;
                    }
                    &:last-child {
                        margin-right: 2vw;
                        margin: 0 2vw 30px 2vw;
                    }
                }
                ${breakpointsMedias.max550} {
                    width: 70vw;
                    max-width: 358px;
                    height: 81vw;
                    margin: 0 2vw 30px 2vw;
                    padding: 42% 20px 0 20px;
                    background-image: url(${frameFeature2});
                    > img {
                        top: 10%;
                        width: 18%;
                    }
                    &:last-child {
                        margin-right: 2vw;
                        margin: 0 2vw 30px 2vw;
                    }
                    .fi-text-1 {
                        margin-bottom: 4px;
                    }
                    > span:last-child {
                        max-width: 250px;
                    }
                }
            }
        }
    }
`