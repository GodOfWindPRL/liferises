import { useWidthScreen } from 'helpers/useScreen'
import { useState } from 'react'
import styled from 'styled-components'
import { breakpointsMedias } from '../../configs/breakpoints'
import barFooter from 'assets/images/bar-footer.png'
import Logo from 'components/header/Logo'
import iconDiscord2 from 'assets/images/icon-discord.svg'
import iconInsta2 from 'assets/images/icon-instagram.svg'
import iconTwitter2 from 'assets/images/icon-twitter.svg'
import iconOpensea2 from 'assets/images/icon-opensea.svg'
import bgFooter from 'assets/images/bg-footer.png'
import barFooter2 from 'assets/images/bar-footer-2.png'
import bgSword from 'assets/images/bg-footer-sword.png'
import bgFire from 'assets/images/bg-footer-fire.png'

export const SOCIAL_LIST = [
    {
        link: "/",
        icon: iconTwitter2,
    },
    {
        link: "/",
        icon: iconDiscord2,
    },
    {
        link: "/",
        icon: iconInsta2,
    },
    {
        link: "/",
        icon: iconOpensea2,
    },
];


const Footer = () => {


    return (
        <Wrap className=''>
            <div className='bg-footer'>
                <img src={bgFooter} alt="" className='bg-desktop'/>
                <img src={bgFire} alt="" className='bg-mobile-fire'/>
                <img src={bgSword} alt="" className='bg-mobile-sword'/>
            </div>
            <div className='bar-footer'>
                <img src={barFooter} alt="" />
            </div>
            <div className="container">
                <div className="footer-logo">
                    <Logo noMobile />
                    <span className="size-0 color-gray">Copyright @2023 Life Rises The Beginning of the Metaverse. Life Rises The Beginning of the Metaverse is a product of Your Company Metaverse Studio Ltd.</span>
                </div>
                <div className={`footer-main`}>
                    <div className="fm-item">
                        <span className="size-2 color-golden">About Us</span>
                        <a href="#team" className="fmi-text">Team</a>
                        <a href="#team" className="fmi-text">Document</a>
                    </div>
                    <div className="fm-item">
                        <span className="size-2 color-golden">Links</span>
                        <a href="#team" className="fmi-text">Game story</a>
                        <a href="#team" className="fmi-text">Characters</a>
                    </div>
                    <div className="fm-item">
                        <span className="size-2 color-golden">Socials</span>
                        <div className="fmi-list">
                            {
                                SOCIAL_LIST.map((item, index) =>
                                    <a href={item.link}
                                        key={index}
                                        target="_blank" rel="noreferrer"
                                        className={`menu-item social-item`}
                                    >
                                        <SocicalItem className="mi-icon-big" active={item.icon} />
                                    </a>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Wrap>
    )
}

export default Footer

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 275px;
    position: relative;
    align-items: center;
    .bg-footer {
        position: absolute;
        bottom: 0;
        right: 0;
        /* width: 100%; */
        height: 596px;
        display: flex;
        z-index: 0;
        > img {
            width: auto;
            height: 100%;
        }
        .bg-mobile-sword {
            display: none;
        }
        .bg-mobile-fire {
            display: none;
        }
    }
    .bar-footer {
        position: absolute;
        top: 0;
        left: 50%;
        width: 70%;
        height: fit-content;
        transform: translate(-50%, -50%);
        > img {
            width: 100%;
            height: auto;
        }
    }
    .container {
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
    .footer-logo {
        z-index: 1;
        width: 40%;
        > div {
            width: 100%;
            margin-bottom: 24px;
        }
        > span {
            display: flex;
            text-align: center !important;
            color: #7C7676;
        }
        /* max-width: 387px; */
    }
    .footer-main {
        z-index: 1;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .fm-item {
            display: flex;
            flex-direction: column;
            width: fit-content;
            margin-right: 10%;
            max-width: 200px;
            .fmi-text {
                color: #7C7676;
                font-family: "Exemplar";
            }
            &:last-child {
                margin-right: 0;
            }
            > span:nth-child(1) {
                margin-bottom: 14px;
            }
            > a:nth-child(2) {
                margin-bottom: 10px;
            }
            > a:hover {
                color: #E2C080;
            }
            .fmi-list {
                display: flex;
                flex-wrap: wrap;
                .social-item {
                    width: 36px;
                    height: 36px;
                    margin-right: 20px;
                    margin-bottom: 12px;
                }
            }
        }
        ${breakpointsMedias.max991} {
            flex-wrap: wrap;
            margin-left: 10%;
            .fm-item {
                width: 50%;
                margin-right: 0;
                max-width: unset;
                margin-bottom: 20px;
                &:last-child {
                    width: 100%;
                    margin-bottom: 0;
                }
            }
        }
    }
    ${breakpointsMedias.max767} {
        height: auto;
        padding: 48px 0 26px 0;
        background: #0C0C0C;
        .container {
            flex-direction: column;
            padding: 0 16px
        }
        .bg-footer {
            height: 300px;
            width: 100%;
            .bg-desktop {
                display: none;
            }
            .bg-mobile-sword {
                display: flex;
                position: absolute;
                right: 0;
                bottom: 0;

            }
            .bg-mobile-fire {
                display: flex;
                position: absolute;
                bottom: 0;
                width: 100%;
            }
        }
        .bar-footer {
            width: 90%;
            > img {
                content: url(${barFooter2});
            }
        }
        .footer-logo {
            z-index: 1;
            width: 90%;
            max-width: 360px;
            margin-bottom: 51px;
        }
        .footer-main {
            margin-left: 0;
            width: 100%;
            .fm-item {
                > a:nth-child(2) {
                    margin-bottom: 6px;
                }
                .fmi-list {
                    .social-item {
                        width: 33px;
                        height: 33px;
                        margin-right: 10px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
`

interface ISocicalItem {
    active: string
}

const SocicalItem = styled.div`
    width: 100%;
    height: 100%;
    background-color: #7C7676 !important;
    -webkit-mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask-size: contain;
    /* transition: 0.6s ease-in-out; */
    &:hover {
        background: #E2C080 !important;
    }
`