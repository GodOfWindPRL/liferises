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

export const SOCIAL_LIST = [
    {
        link: "https://twitter.com/TheMeoNFT",
        icon: iconTwitter2,
    },
    {
        link: "https://discord.gg/themeo",
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
                <img src={bgFooter} alt="" />
            </div>
            <div className='bar-footer'>
                <img src={barFooter} alt="" />
            </div>
            <div className="container">
                <div className="footer-logo">
                    <Logo />
                    <span className="size-0 color-gray">Copyright @2023 Life Rises The Beginning of the Metaverse.
                        Life Rises The Beginning of the Metaverse is a product of
                        Your Company Metaverse Studio Ltd.</span>
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
    top: 0;
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
    }
    .bar-footer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        transform: translateY(-50%);
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
        width: 30%;
        > div {
            width: 100%;
        }
        > span {
            text-align: center;
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
            margin-right: 80px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    ${breakpointsMedias.min768} {

    }
    ${breakpointsMedias.min1200} {

    }
`

interface ISocicalItem {
    active: string
}

const SocicalItem = styled.div`
    background-color: #7C7676;
    -webkit-mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask-size: contain;
    /* transition: 0.6s ease-in-out; */
    &:hover {
        background: #E2C080;
    }
`