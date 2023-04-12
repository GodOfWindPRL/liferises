import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import bgMenu from 'assets/images/bee-net.png'
import ballLight from 'assets/images/ball-light.png'
import iconDiscord from 'assets/images/icon-discord.png'
import iconInsta from 'assets/images/icon-instagram.png'
import iconTwitter from 'assets/images/icon-twitter.png'
import iconOpensea from 'assets/images/icon-opensea.png'
import iconDiscord2 from 'assets/images/icon-discord.svg'
import iconInsta2 from 'assets/images/icon-instagram.svg'
import iconTwitter2 from 'assets/images/icon-twitter.svg'
import iconOpensea2 from 'assets/images/icon-opensea.svg'
import { useTranslation } from 'react-i18next';
import configColor from 'configs/configColor';
import { breakpointsMedias } from 'configs/breakpoints'

interface IMenu {
    onClose: () => void
}

export const MENU_LIST = [
    {
        text: "lore",
        link: "/lore",
    },
    {
        text: "team",
        link: "/team",
    },
    {
        text: "gallery",
        link: "/gallery",
    },
    {
        text: "faqs",
        link: "/faqs",
    }
];
export const SOCIAL_LIST = [
    {
        text: "twitter",
        link: "https://twitter.com/TheMeoNFT",
        icon: iconTwitter,
        icon2: iconTwitter2,
    },
    {
        text: "discord",
        link: "https://discord.gg/themeo",
        icon: iconDiscord,
        icon2: iconDiscord2,
    },
    {
        text: "instagram",
        link: "/",
        icon: iconInsta,
        icon2: iconInsta2,
    },
    {
        text: "opensea",
        link: "/",
        icon: iconOpensea,
        icon2: iconOpensea2,
    },
];

const Menu = ({ onClose }: IMenu) => {
    const { pathname } = useLocation();
    const { t } = useTranslation()
    return (
        <Wrap >
            <div className="bg-net"></div>
            <img src={ballLight} alt="" className='bg-light' />
            <div className={`menu-list`}>
                {
                    MENU_LIST.map((item, index) =>
                        <Link to={item.link}
                            key={index}
                            className={`menu-item ${pathname.split("/")[1] === item.text ? "menu-item-active" : ""}`}
                            onClick={() => {
                                onClose()
                            }}
                        >
                            <span className={`${pathname.split("/")[1] === item.text ? "text-gradient-orange" : ""} size-4`}>{t(item.text)}</span>
                            <div className="mi-border"></div>
                        </Link>)
                }
                {
                    SOCIAL_LIST.map((item, index) =>
                        <a href={item.link}
                            key={index}
                            target="_blank" rel="noreferrer"
                            className={`menu-item social-item`}
                            onClick={() => {
                                onClose()
                            }}
                        >
                            <span className={`size-4`}>{t(item.text)}
                                <div className="mi-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                            </span>
                            <SocicalItem className="mi-icon-big" active={item.icon2} />
                            <div className="mi-border"></div>
                        </a>)
                }
            </div>
        </Wrap>
    )
}

export default Menu

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #000000;
    position: relative;
    .bg-net {
        background-image: url(${bgMenu});
        height: 100%;
        position: absolute;
        width: 100%;
        opacity: 0.5;
    }
    .bg-light {
        position: absolute;
        width: 100%;
    }
    .menu-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 72px 18px 14px 14px;
        z-index: 0;
        .menu-item {
            margin-bottom: 16px;
            cursor: pointer;
            color: ${configColor.lightWhite};
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-transform: uppercase;
            > span {
                display: flex;
                align-items: center;
            }
            .mi-icon {
                width: 24px;
                height: 24px;
                display: flex;
                margin-left: 12px;
                > img {
                    object-fit: contain;
                }
            }
            .mi-icon-big {
                display: none;
            }
            .mi-border {
                width: 100%;
                height: 1px;
                background: #8282825e;
                margin-top: 16px;
            }
            &:hover{
                .mi-border {
                    background: #E6E6E6;
                }
            }
        }
        .menu-item-active {
            .mi-border {
                background: linear-gradient(135deg, #FE8C00 0%, #F83600 100%) !important;
            }
        }
    }
    ${breakpointsMedias.min768} {
        flex-direction: row;
        background-color: transparent;
        .bg-net {
           display: none;
        }
        .bg-light {
            display: none;
        }
        .menu-list {
            flex-direction: row;
            align-items: center;
            padding: 0;
            .menu-item {
                margin-bottom: 0;
                margin: 0 16px;
                > span {
                    font-size: 16px;
                    line-height: 20px;
                }
                .mi-border {
                    display: none;
                }
            }
            .social-item {
                margin: 0;
                margin-left: 20px;
                > span {
                    display: none;
                }
                .mi-icon-big {
                    display: flex;
                    width: 30px;
                    height: 30px;
                    > img {
                       object-fit: contain;
                    }
                }
                &:nth-child(5) {
                    margin-left: auto;
                }
                &:last-child {
                    margin-right: 6px;
                }
            }
        }
    }
    ${breakpointsMedias.min1200} {
        .menu-list {
            .menu-item {
                margin: 0 25px;
                > span {
                    font-size: 20px;
                    line-height: 25px;
                }
            }
            .social-item {
                margin-left: 32px;
                .mi-icon-big {
                    width: 60px;
                    height: 60px;
                    > img {
                        transition: 0.5s;
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
    background-color: #828282;
    -webkit-mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask: url(${({ active }: ISocicalItem) => active}) no-repeat center;
    mask-size: contain;
    /* transition: 0.6s ease-in-out; */
    &:hover {
        background: linear-gradient(135deg, #FE8C00 0%, #F83600 100%);
    }
`