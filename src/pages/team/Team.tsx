import bgTeam from 'assets/images/bg-team.png'
import bgTeam2 from 'assets/images/bg-team-2.png'
import bgTeamItem from 'assets/images/bg-team-item.png'
import imgMeo from 'assets/images/logo.png'
import imgMeo2 from 'assets/images/logo-2.png'
import imgMiniLinkedin from 'assets/images/icon-mini-linkedin.png'
import imgMiniTwitter from 'assets/images/icon-mini-twitter.png'
import styled from 'styled-components'
import { breakpointsMedias } from 'configs/breakpoints'
import { useTranslation } from 'react-i18next'
import { dataTeam } from './dataTeam'

const Team = () => {
    const { t } = useTranslation()

    return (<Wrap>
        <div className="team-bg"></div>
        <div className='team-content'>
            <span className="tc-title size-4 color-white-2 text-uppercase">{t("team")}</span>
            <div className="tc-main">
                {
                    dataTeam.map((item, index) => <div key={index} className="tcm-item">
                        <div className="tcmi-main">
                            <div className="tcmim">
                                <div className={`light-img ${item.img ? "img-team" : "img-all"}`}>
                                    <div className=""></div>
                                    {<img src={imgMeo2} alt="" />}
                                </div>
                                {item.img && <div className="team-img">
                                    <img src={item.img} alt="" />
                                </div>}
                                <span className="size-2 color-orange team-name">{item.name}</span>
                                <span className="size-2 color-white-2 team-job">
                                    {item.job}
                                    {item.linkedin && <a href={item.linkedin} target="_blank" rel="noreferrer">
                                        <img src={imgMiniLinkedin} alt="" />
                                    </a>}
                                    {item.twitter && <a href={item.twitter} target="_blank" rel="noreferrer">
                                        <img src={imgMiniTwitter} alt="" />
                                    </a>}
                                </span>
                            </div>
                            <div className="team-shadow-text"></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </Wrap>)
}

export default Team

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 67px;
    position: relative;
    z-index: 0;
    align-items: center;
    .team-bg {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-image: url(${bgTeam});
        background-size: cover;
        background-position: center center;
        z-index: 0;
    }
    .team-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        z-index: 1;
        .tc-title {
            margin-bottom: 12px;
        }
        .tc-main {
            display: flex;
            flex-wrap: wrap;
            .tcm-item {
                display: flex;
                width: calc(50% - 8px);
                margin-right: 16px;
                margin-bottom: 16px;
                height: fit-content;
                border-radius: 12px;
                &:nth-child(2n + 2) {
                    margin-right: 0;
                }
                .tcmi-main {
                    width: 100%;
                    padding-top: 100%;
                    border-radius: 12px;
                    background:#828282;
                    position: relative;
                    transition: 0.5s;
                    overflow: hidden;
                    .tcmim {
                        border-radius: 12px;
                        background-color: #000000;
                        background-image: url(${bgTeamItem});
                        background-size: cover;
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        width: calc(100% - 4px) ;
                        height:  calc(100% - 4px) ;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        /* justify-content: center; */
                        overflow: hidden;
                        .light-img {
                            width: 46%;
                            height: fit-content;
                            position: relative;
                            z-index: 0;
                            margin-top: 10%;
                            margin-bottom: auto;
                            > div {
                                border-radius: 50%;
                                position: absolute;
                                height: 60%;
                                width: 60%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                z-index: 0;
                                transition: 0.5s;
                            }
                            > img {
                                position: relative;
                                z-index: 1;
                                width: 100%;
                                height: auto;
                            }
                        }
                        .team-img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            display: flex;
                            z-index: 0;
                            > img {
                                object-fit: cover;
                            }
                        }
                        > span {
                            z-index: 1;
                        }
                        .team-job {
                            margin-top: 4px;
                            display: flex;
                            align-items: center;
                            margin-bottom: 6%;
                            a {
                                width: fit-content;
                                height: 14px;
                                margin-left: 8px;
                                display: flex;
                                > image {
                                    height: 100%;
                                    width: auto;
                                }
                            }
                        }
                    }
                    .team-shadow-text {
                        position: absolute;
                        bottom: 2px;
                        height: 28%;
                        left: 2px;
                        width: calc(100% - 4px);
                        background: linear-gradient(0, #000000 13.54%, rgba(0, 0, 0, 0) 100%);
                        border-radius: 0px 0px 12px 12px;
                    }
                }
                &:hover {
                    .tcmi-main {
                        box-shadow: 0 0 20px 10px #fe8c0038;
                        background: linear-gradient(135deg, #FE8C00 0%, #F83600 100%);
                        .tcmim {
                            .light-img {
                                > div {
                                    box-shadow: 0 0 12vw 6vw #fe8c00ce;
                                    ${breakpointsMedias.min768} {
                                        box-shadow: 0 0 9vw 4vw #fe8c00ce;
                                    }
                                    ${breakpointsMedias.min1200} {
                                        box-shadow: 0 0 6vw 2.7vw #fe8c00ce;
                                    }
                                    ${breakpointsMedias.min1400} {
                                        box-shadow: 0 0 5vw 2.1vw #fe8c00ce;
                                    }
                                }
                            }
                            .img-all {
                                > img {
                                    content: url(${imgMeo});
                                }
                            }
                        }
                    }
                }
                ${breakpointsMedias.min768} {
                    width: calc((100% - 36px) / 3);
                    &:nth-child(2n + 2) {
                        margin-right: 16px;
                    }
                    &:nth-child(3n + 3) {
                        margin-right: 0;
                    }
                }
                ${breakpointsMedias.min1200} {
                    width: calc((100% - 90px) / 4);
                    margin-right: 30px;
                    margin-bottom: 30px;
                    border-radius: 20px;
                    &:nth-child(2n + 2) {
                        margin-right: 30px;
                    }
                    &:nth-child(3n + 3) {
                        margin-right: 30px;
                    }
                    &:nth-child(4n + 4) {
                        margin-right: 0;
                    }
                    .tcmi-main {
                        border-radius: 20px;
                        .tcmim {
                            border-radius: 20px;
                            .light-img {
                                width: 53%;
                            }
                            .team-job {
                                margin-top: 8px;
                                a {
                                    height: 20px;
                                    margin-left: 12px;
                                }
                            }
                        }
                        .team-shadow-text {
                            border-radius: 0px 0px 18px 18px;
                        }
                    }
                }
                ${breakpointsMedias.min1400} {
                    width: calc((100% - 120px) / 5);
                    &:nth-child(4n + 4) {
                        margin-right: 30px;
                    }
                    &:nth-child(5n + 5) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
    ${breakpointsMedias.min768} {
        margin-top: -60px;
    }
    ${breakpointsMedias.min1200} {
        margin-top: -140px;
        padding-top: 172px;
        flex-direction: row;
        align-items: flex-start;
        /* overflow: hidden; */
        min-height: 100vh;
        position: relative;
        .team-bg {
            background-image: url(${bgTeam2});
            z-index: 0;
        }
        .team-content {
            padding: 0 60px 78px 60px;
            .tc-title {
                margin-bottom: 24px;
                font-weight: 700;
                font-size: 40px;
                line-height: 50px;
            }
            .tc-main {

            }
        }
    }
`