import styled from 'styled-components'

const TokenMetric = () => {
    const dataFeature = [{
        title: "Main governance token:",
        token: "LIR token",
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
    }, {
        title: "In-game token:",
        token: "LIR token",
        options: [
            {
                title: "Blockchain Network:",
                text: "BNB Chain"
            }
        ],
        mainUses: [
            "For rewards for in-game activities such as battle pass, quest, events, NFT Lease or dungeon rewards.",
            "For trading, exchanging, and improving one’s Character including their special qualities."
        ]
    }]

    return <Wrap>
        <div className="hp-title">
            <img src="" alt="" className='hpt-side' />
            <img src="" alt="" className='hpt-text' />
            <img src="" alt="" />
        </div>
        <div className="container">
            <div className="tm-item tm-left">
                <div className="tmi-wrap">
                    <img src="" alt="" className='tmi-token' />
                    <img src="" alt="" className='tmi-bg' />
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
    padding: 104px 0 234px 0;
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
        }
        .hpt-side {
            flex: 1;
        }
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .tm-item {
            position: absolute;
            top: 0;
            width: 59.46%;
            .tmi-wrap {
                position: relative;
                width: 100%;
                .tmi-token {
                    position: absolute;
                    top: 0;
                }
                .tmi-bg {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
                .tmi-text {
                    display: flex;
                    flex-direction: column;
                    .tmit-options {
                        width: 100%;
                        display: flex;
                        .tmito-item {
                            display: flex;
                            flex-direction: column;
                            &:last-child {
                                margin-left: auto;
                                flex: 1;
                            }
                        }
                    }
                    > ul {

                    }
                }
            } 
        }
        .tm-left {
            left: 0;
        }
        .tm-right {
            right: 0;
        }
    }
`