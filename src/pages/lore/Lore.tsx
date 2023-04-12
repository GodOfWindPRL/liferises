import bgLore from 'assets/images/bg-lore.png'
import bgLore2 from 'assets/images/bg-lore-2.png'
import imgMeo from 'assets/images/lore-meo.png'
import imgMeo2 from 'assets/images/lore-meo-2.png'
import styled from 'styled-components'
import { breakpointsMedias } from 'configs/breakpoints'
import { useTranslation } from 'react-i18next'
import { dataLore } from './dataLore'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useEffect } from 'react'
import { useWidthScreen } from 'helpers/hooks/useScreen'

const Lore = () => {
    const { t } = useTranslation();
    const { width } = useWidthScreen()

    useEffect(() => {
        if (width >= 768) {
            const scrollContainer = document.querySelector(".lcm");
            scrollContainer?.addEventListener("wheel", (evt: any) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
        }
    }, [])

    return (<Wrap>
        <div className='lore-content'>
            <span className="lc-title size-4 color-white-2 text-uppercase">{t("theLore")}</span>
            <div className="lc-main">
                {/* <div className="lcm scrollbar"> */}
                <ScrollContainer className="scroll-container lcm scrollbar" hideScrollbars={false} >
                    <div className="lcm-list">
                        {dataLore.map((item, index) => <div key={index} className="lcm-item">
                            <div className="lcmi-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="lcmi-text scrollbar">
                                <span className="size-2 color-white-2">{t(item.text)}</span>
                            </div>
                        </div>)}
                    </div>
                </ScrollContainer>
                {/* </div> */}
                <div className="lcm-shadow"></div>
            </div>
        </div>
        <div className="lore-meo"></div>
    </Wrap>)
}

export default Lore

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${bgLore});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    padding-top: 67px;
    position: relative;
    z-index: 0;
    align-items: center;
    .lore-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 16px 0 14px;
        height: 66vh;
        overflow: hidden;
        max-width: 400px;
        .lc-title {
            margin-bottom: 12px;
        }
        .lc-main {
            width: 100%;
            border: 2px solid #828282c8;
            border-radius: 12px;
            padding: 22px 10px 22px 28px;
            background: #000000;
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            overflow: hidden;
            position: relative;
            .lcm {
                width: 100%;
                height: 100%;
                overflow: auto;
                .lcm-list {
                    display: flex;
                    flex-direction: column;
                    padding-right: 14px;
                }
                .lcm-item {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    .lcmi-img {
                        border-radius: 8px;
                        border: 2px solid #828282c8;
                        width: 100%;
                        height: fit-content;
                        overflow: hidden;
                        > img {
                            width: 100%;
                            height: auto;
                        }
                    }
                    .lcmi-text {
                        margin: 16px 0;
                        width: 100%;
                        text-align: center;
                    }
                }
            }
            .lcm-shadow {
                display: none;
            }
        }
    }
    .lore-meo {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30vh;
        background-image: url(${imgMeo});
        background-position: center center;
        background-size: auto 110%;
        background-repeat: no-repeat;
    }
    ${breakpointsMedias.min768} {
        margin-top: -60px;
        .lore-content {
            height: 66vh;
            max-width: unset;
            .lc-main {
                .lcm {
                    .lcm-list {
                        height: 100%;
                        display: inline-flexbox;
                        flex-direction: row;
                        padding-right: 0;
                    }
                    .lcm-item {
                        width: 30vh;
                        height: 100%;
                        margin-right: 30px;
                        .lcmi-img {
                            border-radius: 8px;
                        }
                        .lcmi-text {
                            margin: 20px 0 0 0;
                            text-align: left;
                        }
                    }
                }
                .lcm-shadow {
                    height: calc(100% - 4px);
                    width: 100px;
                    display: flex;
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    background: linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                    border-radius: 18px 18px 0px 0px;
                }
            }
        }
        .lore-meo {
            height: 28vh;
        }
    }
    ${breakpointsMedias.min1200} {
        margin-top: -140px;
        background-image: url(${bgLore2});
        /* padding-top: 172px; */
        padding-top: 142px;
        flex-direction: row;
        align-items: flex-start;
        min-height: 100vh;
        .lore-content {
            padding: 0 60px 48px 60px;
            height: unset;
            align-self: stretch;
            width: 63vw;
            z-index: 1;
            .lc-title {
                margin-bottom: 24px;
                font-weight: 700;
                font-size: 40px;
                line-height: 50px;
            }
            .lc-main {
                border-radius: 20px;
                padding: 24px 20px 14px 24px;
                .lcm-shadow {
                    width: 100px;
                }
                .lcm {
                    .lcm-item {
                        overflow: hidden;
                        width: 31.3vh;
                        margin-right: 24px;
                        .lcmi-img {
                            border-radius: 12px;
                        }
                        .lcmi-text {
                            > span {
                                font-size: 14px;
                                line-height: 18px;
                            }
                        }
                    }
                }
            }
        }
        .lore-meo {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 83vh;
            z-index: 0;
            background-image: url(${imgMeo2});
            background-position: right bottom;
            background-size: auto 100%;
            background-repeat: no-repeat;
        }
    }
`
