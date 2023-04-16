import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import discordBt from 'assets/images/discord-bt.png'
import bgLink from 'assets/images/bg-link.png'
import { useTranslation } from 'react-i18next';
import configColor from 'configs/configColor';
import { breakpointsMedias } from 'configs/breakpoints'

interface IMenu {
    onClose: () => void
}

export const MENU_LIST = [
    {
        text: "story",
        link: "",
        hasBg: true
    },
    {
        text: "marketplace",
        link: "",
    },
    {
        text: "tokenMetric",
        link: "",
    },
    {
        text: "roadmap",
        link: "",
    },
    {
        text: "documents",
        link: "",
    }
];



const Menu = ({ onClose }: IMenu) => {
    const { pathname } = useLocation();
    const { t } = useTranslation()
    console.log(pathname.split("/")[1] === "")

    return (
        <Wrap >
            <div className="bg-net"></div>
            {/* <img src={ballLight} alt="" className='bg-light' /> */}
            <div className={`menu-list`}>
                {
                    MENU_LIST.map((item, index) =>
                        <Link to={item.link}
                            key={index}
                            className={`menu-item ${(pathname.split("/")[1] === item.link && item.hasBg) ? "menu-item-active" : ""}`}
                            onClick={() => {
                                onClose()
                            }}
                        >
                            <span className={`${(pathname.split("/")[1] === item.link && item.hasBg) ? "color-golden" : "color-gray"} size-4`}>{t(item.text)}</span>
                        </Link>)
                }

                <a href={""}
                    target="_blank" rel="noreferrer"
                    className={`social-item`}
                    onClick={() => {
                        onClose()
                    }}
                >
                    <img src={discordBt} alt="" className='bg-social' />
                    <span className={`size-0`}>{t("joinDiscord")}</span>
                </a>

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
        height: 100%;
        .menu-item {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 100%;
            &:hover {
                > span {
                    color: #E2C080;
                    mix-blend-mode: normal;
                    text-shadow: 0px 0px 8px rgba(221, 207, 167, 0.6), 0px 4px 12px #000000;
                }
            }
        }
        .menu-item-active {
            background-image:url(${bgLink});
            background-size: 100% 100%;
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
                padding: 0 20px;
            }
            .social-item {
                margin: 0;
            }
        }
    }
    ${breakpointsMedias.min1200} {
        .menu-list {
            .menu-item {
                padding: 0 30px;
            }
            .social-item {
                width: 120px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                .bg-social {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                    z-index: 0;
                }
                > span {
                    margin-top: 74px;
                    text-align: center;
                    color: #000000;
                    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
                    line-height: 20px;
                    z-index: 1;
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