import styled from 'styled-components'
import imgToken1 from "assets/images/token-1.png"
import frameToken1 from "assets/images/frame-token-1.png"
import imgToken2 from "assets/images/token-2.png"
import frameToken2 from "assets/images/frame-token-2.png"
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleToken from "assets/images/title-token.png"
import titleLeft2 from "assets/images/title-left-2.png"
import titleRight2 from "assets/images/title-right-2.png"
import { breakpointsMedias } from 'configs/breakpoints'
import frameToken1b from "assets/images/frame-token-1b.png"
import frameToken2b from "assets/images/frame-token-2b.png"

const TokenMetric = () => {
    const dataFeature = [{
        title: "Main governance token:",
        token: "LIR token",
        img: imgToken1,
        frame: frameToken1,
        options: [
            {
                title: "Total supply:",
                text: "10 billion tokens"
            },
            {
                title: "Blockchain Network:",
                text: "BNB Chain"
            }
        ],
        mainUses: [
            "For staking",
            "For payment fee, payment unit on Marketplace",
            "For rewards for participating in special events",
            "For voting in key governance"
        ]
    },
    {
        title: "In-game token:",
        token: "LIRE token",
        img: imgToken2,
        frame: frameToken2,
        options: [
            {
                title: "Blockchain Network:",
                text: "BNB Chain"
            }
        ],
        mainUses: [
            "For rewards for in-game activities such as battle pass, quest, events, NFT Lease or dungeon rewards.",
            "For trading, exchanging, and improving one’s Character including their special qualities.",
        ]
    }]

    return <Wrap>
        <div className="hp-title">
            <div className='hpt-side'>
                <img src={titleLeft} alt="" />
            </div>
            <div className='hpt-text' >
                <img src={titleToken} alt="" />
            </div>
            <div className='hpt-side'>
                <img src={titleRight} alt="" />
            </div>
        </div>
        <div className="container">
            <div className="tm-item tm-left appear">
                <div className="tmi-wrap">
                    <div className='tmi-bg'>
                        <img src={dataFeature[0].frame} alt="" />
                    </div>

                    <img src={dataFeature[0].img} alt="" className='tmi-token' />
                    <div className="tmi-text">
                        <span className="size-1 color-gray">{dataFeature[0].title}</span>
                        <span className="size-1 color-blue">{dataFeature[0].token}</span>
                        <div className="tmit-options">
                            {dataFeature[0].options.map((item, index) => <div key={index} className='tmito-item'>
                                <span className="size-0 color-gray">{item.title}</span>
                                <span className="size-0 color-gold">{item.text}</span>
                            </div>)}
                        </div>
                        <div className="tmit-main">
                            <span className="size-0 color-gray">Main uses:</span>
                            <ul>
                                {dataFeature[0].mainUses.map((item, index) => <li key={index} className='tmitm-item size-0 color-gold'>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-item tm-right appear">
                <div className="tmi-wrap">
                    <img src={dataFeature[1].frame} alt="" className='tmi-bg' />
                    <img src={dataFeature[1].img} alt="" className='tmi-token' />
                    <div className="tmi-text">
                        <span className="size-1 color-gray">{dataFeature[1].title}</span>
                        <span className="size-1 color-golden">{dataFeature[1].token}</span>
                        <div className="tmit-options">
                            {dataFeature[1].options.map((item, index) => <div key={index} className='tmito-item'>
                                <span className="size-0 color-gray">{item.title}</span>
                                <span className="size-0 color-gold">{item.text}</span>
                            </div>)}
                        </div>
                        <div className="tmit-main">
                            <span className="size-0 color-gray">Main uses:</span>
                            <ul>
                                {dataFeature[1].mainUses.map((item, index) => <li key={index} className='tmitm-item size-0 color-gold'>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrap>
}

export default TokenMetric

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 244px 0 230px 0;
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
        justify-content: center;
        position: relative;
        max-width: unset;
        padding: 0;
        ${breakpointsMedias.max991} {
            flex-direction: column;
        }
        .tm-item {
            /* width: 59.46%; */
            width: 785px;
            display: flex;
            .tmi-wrap {
                position: relative;
                width: 100%;
                height: fit-content;
                .tmi-token {
                    width: 60%;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-65%, -50%);
                }
                .tmi-bg {
                    /* position: absolute;
                    bottom: 0; */
                    width: 100%;
                    height: fit-content;
                    > img {
                        width: 100%;
                        height: auto;
                    }
                }
                .tmi-text {
                    position: absolute;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    padding: 189px 188px 0 188px;
                    .tmit-options {
                        width: 100%;
                        display: flex;
                        margin-top: 16px;
                        .tmito-item {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            &:last-child {
                                margin-left: auto;
                                flex: 1;
                            }
                        }
                    }
                    .tmit-main {
                        margin-top: 16px;
                        > ul {

                        }
                    }
                  
                }
            } 
            ${breakpointsMedias.max1599} {
                width: 585px;
                .tmi-wrap {
                    .tmi-text {
                        padding: 140px 140px 0 140px;
                        .tmit-options {
                            width: 100%;
                            display: flex;
                            margin-top: 16px;
                            .tmito-item {
                                display: flex;
                                flex-direction: column;
                                &:last-child {
                                    margin-left: auto;
                                    flex: 1;
                                }
                            }
                        }
                    }
                } 
            }
            ${breakpointsMedias.max1199} {
                width: 585px;
                .tmi-wrap {
                    .tmi-text {
                        padding: 20% 22% 0 22%;
                    }
                } 
            }
            ${breakpointsMedias.max991} {
                max-width:358px;
                width: calc(100% - 32px);
                .tmi-wrap {
                    .tmi-text {
                        padding: 40% 10% 0 10%;
                    }
                    .tmi-bg {

                        content: url(${frameToken1b});
                    } 
                    .tmi-token {
                        width: 90%;
                        transform: translate(-50%, -40%);
                    }
                } 
            }
        }
        .tm-left {
            left: 0;
            margin-right: -100px;
            ul {
                transform: translateX(16px);
            }
        }
        .tm-right {
            right: 0;
            .tmi-wrap {
                .tmi-token {
                    transform: translate(-35%, -50%);
                }
                .tmi-text {
                    align-items: flex-end;
                    .tmit-options {
                        align-items: flex-end;
                        .tmito-item {
                            align-items: flex-end;
                        }
                    }
                    .tmit-main {
                        display: flex;
                        flex-direction: column;
                        > span {
                            text-align: right;
                            margin-left: auto;
                        }
                        > ul {
                            text-align: right;
                        }
                    }
                }
            }
        }
        ${breakpointsMedias.max991} {
            .tm-left {
                left: 0;
                margin-right: 0;
                margin-bottom: 74px;
            }
            .tm-right {
                right: 0;
                ul {
                    transform: translateX(16px);
                }
                .tmi-wrap {
                    .tmi-token {
                        transform: translate(-50%, -40%);
                    }
                    .tmi-text {
                        align-items: flex-start;
                        .tmit-options {
                            align-items: flex-start;
                            .tmito-item {
                                align-items: flex-start;
                            }
                        }
                        .tmit-main {
                            display: flex;
                            flex-direction: column;
                            > span {
                                text-align: left;
                                margin-left: 0;
                            }
                            > ul {
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
    }

    ${breakpointsMedias.max1199} {
        padding: 244px 0 230px 0;
        ${breakpointsMedias.max991} {
            padding: 120px 0 55px 0;
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
    }
`