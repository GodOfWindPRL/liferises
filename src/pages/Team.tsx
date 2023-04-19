import titleLeft from "assets/images/title-left.png"
import titleRight from "assets/images/title-right.png"
import titleTeam from "assets/images/title-team.png"
import frameTeam from "assets/images/frame-team.png"
import imgTeam1 from "assets/images/team1.png"
import imgTeam2 from "assets/images/team2.png"
import imgTeam3 from "assets/images/team3.png"
import imgTeam4 from "assets/images/team4.png"
import imgTeam5 from "assets/images/team5.png"
import imgTeam6 from "assets/images/team6.png"
import imgTeam7 from "assets/images/team7.png"
import imgTeam8 from "assets/images/team8.png"
import imgTeam9 from "assets/images/team9.png"
import imgTeam10 from "assets/images/team10.png"
import imgTeam11 from "assets/images/team11.png"
import imgTeam12 from "assets/images/team12.png"
import imgTeam13 from "assets/images/team13.png"
import imgTeam14 from "assets/images/team14.png"
import imgTeam15 from "assets/images/team15.png"
import topTeam from "assets/images/top-team.png"
import styled from 'styled-components'
import titleLeft2 from "assets/images/title-left-2.png"
import titleRight2 from "assets/images/title-right-2.png"
import topTeam2 from "assets/images/top-team-2.png"
import { breakpointsMedias } from "configs/breakpoints"

const Team = () => {
    const dataFeature = [{
        img: imgTeam1,
        name: "Peter Nguyen",
        job: "Founder & CEO"
    }, {
        img: imgTeam6,
        name: "Edward Pham",
        job: "COO&Game Director"
    }, {
        img: imgTeam10,
        name: "Oanh Nguyễn",
        job: "Project Manager"
    }, {
        img: imgTeam11,
        name: "Felix Trần",
        job: "RND Director"
    }, {
        img: imgTeam12,
        name: "Linh Nguyễn",
        job: "Art Director"
    }, {
        img: imgTeam2,
        name: "Albus",
        job: "Community Manager"
    }, {
        img: imgTeam3,
        name: "An Đặng ",
        job: "Lead 2D Designer"
    }, {
        img: imgTeam4,
        name: "Ninh Lê",
        job: "Lead 3D Designer"
    }, {
        img: imgTeam5,
        name: "Henry",
        job: "Community Manager"
    }, {
        img: imgTeam7,
        name: "Yến Nguyễn",
        job: "Asset Integration Manager"
    }, {
        img: imgTeam8,
        name: "Sabo Lee",
        job: "Game Developer"
    }, {
        img: imgTeam9,
        name: "Thân Trần",
        job: "Game Developer"
    }, {
        img: imgTeam13,
        name: "Dương Nguyễn ",
        job: "Game Developer"
    }, {
        img: imgTeam14,
        name: "Chương Nguyễn",
        job: "Lead Level Design"
    }, {
        img: imgTeam15,
        name: "Luke",
        job: "Game Developer"
    },]

    return <Wrap>
        <div className="top-team">
            <img src={topTeam} alt="" />
        </div>
        <div className="hp-title">
            <div className='hpt-side'>
                <img src={titleLeft} alt="" />
            </div>
            <div className='hpt-text' >
                <img src={titleTeam} alt="" />
            </div>
            <div className='hpt-side'>
                <img src={titleRight} alt="" />
            </div>
        </div>
        <div className="container">
            {dataFeature.map((item, index) => <div key={index} className="fe-item appear">
                <div className="fi-img">
                    <img src={item.img} alt="" />
                </div>

                <span className='size-1 color-golden fi-name'>{item.name}</span>
                <span className='size-0 color-gray fi-job'>{item.job}</span>
            </div>)}
        </div>
    </Wrap>

}

export default Team
const Wrap = styled.div`
    width: 100%;
    /* height: 47.656vw; */
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 0 155px 0;
    background: #0C0C0C;
    .top-team {
        width: 100%;
        height: fit-content;
        display: flex;
        > img {
            width: 100%;
            height: auto;
        }
    }
    .hp-title {
        /* position: absolute;
        top: 0;
        left: 0; */
        margin-bottom: 42px;
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
        margin-bottom: 16px;
        flex-wrap: wrap;
        .fe-item {
            width: calc((100% - 160px) / 5);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 40px;
            margin-bottom: 60px;
            align-self: stretch;
            &:nth-child(5n + 5) {
                margin-right: 0;
            }
            .fi-img {
                width: 100%;
                height: fit-content;
                background-image: url(${frameTeam});
                background-size: 100% 100%;
                margin-bottom: 27px;
                display: flex;
                > img {
                    width: 100%;
                    height: auto;
                }
            }
            .fi-name {
                margin-bottom: 2px;
                text-align: center;
            }
            .fi-job {
                text-align: center;
            }
            ${breakpointsMedias.max1199} {
                width: calc((100% - 120px) / 4);
                margin-right: 40px;
                &:nth-child(5n + 5) {
                    margin-right: 40px;
                }
                &:nth-child(4n + 4) {
                    margin-right: 0;
                }
            }
        }
    }
    ${breakpointsMedias.max1199} {
        padding: 0 0 155px 0;
        .top-team {
            margin-bottom: 3%;
            > img {
                content: url(${topTeam2});
                margin-top: -5%;
            }
        }
        .hp-title {
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
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
    ${breakpointsMedias.max767} {
        padding: 0 0 74px 0;
        .hp-title { 
            margin-bottom: 20px;
        }
        .container {
            margin-bottom: 0;
            .fe-item {
                width: calc((100% - 16px) / 2);
                margin-right: 16px;
                margin-bottom: 34px;
                align-self: stretch;
                &:nth-child(5n + 5) {
                    margin-right: 16px;
                }
                &:nth-child(2n + 2) {
                    margin-right: 0;
                }
                .fi-img {
                    margin-bottom: 12.5px;
                }
                .fi-name {
                    margin-bottom: 0;
                }
            }
        }
    }
`