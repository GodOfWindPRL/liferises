import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleRoadmap from "assets/images/title-roadmap.png"
import bgRoadmap from "assets/images/bg-roadmap.png"
import iconRoadmap from "assets/images/icon-roadmap.png"
import styled from 'styled-components'

const Roadmap = () => {
    const dataFeature = [{
        title: "2022 - Q1.2023",
        text: [
            "Idea Incubation",
            "Team formation",
            "Research and Development"
        ]
    }, {
        title: "Q2-Q3.2023",
        text: [
            "Game development",
            "Partners and Backers Contact",
            "Building Community",
            "Pre - Alpha PC platform"
        ]
    }, {
        title: "Q4.2023",
        text: [
            "Pre-Alpha Mobile platform",
            "PvE, PvP, PvP / TvT / Battle system",
            "Marketplace Launch",
            "Launch Token sale"
        ]
    }, {
        title: "Q1 - Q2.2024",
        text: [
            "Develop Crafting, Upgrade, Fusion system",
            "Develop Building system",
            "Develop Story & Quest system",
            "Alpha Mobile platform"
        ]
    }, {
        title: "Q3 - Q4.2024",
        text: [
            "Develop Land System",
            "Develop Enemy and Boss",
            "Pre - Close Beta (Pre-Testnet) Mobile platform"
        ]
    }, {
        title: "2025",
        text: [
            "All NFT / Gem Launch",
            "All NFT Pet and Guard Launch NFT Land Launch",
            "Close Beta Launch",
            "Official Game Launch"
        ]
    }]

    return <Wrap>
        <div className="hp-title">
            <div className='hpt-side'>
                <img src={titleLeft} alt="" />
            </div>
            <div className='hpt-text' >
                <img src={titleRoadmap} alt="" />
            </div>
            <div className='hpt-side'>
                <img src={titleRight} alt="" />
            </div>
        </div>
        <div className="container">
            {dataFeature.map((item, index) => <div key={index} className="fe-item">
                <img src={iconRoadmap} alt="" />
                <span className='size-1 color-golden fi-text-1'>{item.title}</span>
                <ul>
                    {item.text.map((item2, index) => <li key={index}>
                        <span className="size-0 color-gray">{item2}</span>
                    </li>)}
                </ul>
            </div>)}
        </div>
    </Wrap>

}

export default Roadmap
const Wrap = styled.div`
    width: 100%;
    /* height: 47.656vw; */
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: url(${bgRoadmap});
    background-size: cover;
    padding: 158px 0 184px 0;
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
        margin-bottom: 16px;
        flex-wrap: wrap;
        .fe-item {
            width: 33.3%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 47px 0 57px 0;
            border-top: 1px solid #7C7676;
            align-self: stretch;
            &:last-child {
                margin-right: 0;
            }
            > img {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(-50%);
                width: 26px;
                height: auto;
            }
            .fi-text-1 {
                margin-bottom: 12px;
                border-radius: 10px;
                border: 1px solid #E2C080;
                padding: 12px 20px;
                margin-bottom: 26px;
            }
            ul {
                width: 100%;
            }
            &:nth-child(3),
            &:nth-child(6) {
                border: 1px solid #7C7676;   
            }
            &:nth-child(3) {
                border-radius: 0 50% 50% 0;
                border-left: none;   
            }
            &:nth-child(6) {
                border: none;   
            }
        }
    }
`