import Button from 'components/core/Button'
import styled from 'styled-components'

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
            <img src="" alt="" className='hpt-side' />
            <img src="" alt="" className='hpt-text' />
            <img src="" alt="" />
        </div>
        <div className="container">
            {dataFeature.map((item, index) => <div key={index} className="fe-item">
                <img src="" alt="" />
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
        .fe-item {
            width: 300px;
            height: 455px;
            margin-right: 40px;
            position: relative;
            padding: 214px 40px 0 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
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
        }
    }
`