import styled from 'styled-components'
import imgToken1 from "assets/images/token-1.png"
import frameToken1 from "assets/images/frame-token-1.png"
import imgToken2 from "assets/images/token-2.png"
import frameToken2 from "assets/images/frame-token-2.png"
import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleToken from "assets/images/title-token.png"

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
            <div className="tm-item tm-left">
                <div className="tmi-wrap">
                    <img src={dataFeature[0].frame} alt="" className='tmi-bg' />
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
            <div className="tm-item tm-right">
                <div className="tmi-wrap">
                    <img src={dataFeature[1].frame} alt="" className='tmi-bg' />
                    <img src={dataFeature[1].img} alt="" className='tmi-token' />
                    <div className="tmi-text">
                        <span className="size-1 color-gray">{dataFeature[1].title}</span>
                        <span className="size-1 color-blue">{dataFeature[1].token}</span>
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
        justify-content: space-between;
        position: relative;
        max-width: unset;
        padding: 0;
        .tm-item {
            /* width: 59.46%; */
            width: 785px;
            display: flex;
            .tmi-wrap {
                position: relative;
                width: 100%;
                height: fit-content;
                .tmi-token {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .tmi-bg {
                    /* position: absolute;
                    bottom: 0; */
                    width: 100%;
                    height: auto;
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
                            &:last-child {
                                margin-left: auto;
                                flex: 1;
                            }
                        }
                    }
                    .tmit-main {
                        > ul {

                        }
                    }
                  
                }
            } 
        }
        .tm-left {
            left: 0;
            margin-right: -100px;
        }
        .tm-right {
            right: 0;
            .tmi-wrap {
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

                        }
                    }
                }
            }
        }
    }
`