import Button from 'components/core/Button'
import styled from 'styled-components'
import barTop from "assets/images/bar-top.png"
import bgCharacter from "assets/images/bg-character.png"
import bgCharacter2 from "assets/images/bg-character-2.png"
import imgOrc from "assets/images/img-orc.png"
import imgFire from "assets/images/fire.png"
import { breakpointsMedias } from 'configs/breakpoints'

const Character = () => {
    return <Wrap>
        <div className="container">
            <img src={barTop} alt="" className='bar-top' />
            <div className="character-text appear">
                <span className="size-2 color-golden ct-1">Character</span>
                <span className="size-0 color-gold ct-2">These are player-created characters. Each character has its own unique features, expressing the distinct personalities or preferences of the player.</span>
                <div className="ct-bt">
                    <a href="">
                        <Button text='Free' />
                    </a>
                    <a href="">
                        <Button text='Craft' />
                    </a>
                </div>
            </div>
            <div className="img-orc">
                <img src={imgOrc} alt="" />
            </div>
            <div className="img-orc img-fire">
                <img src={imgFire} alt="" />
            </div>
        </div>
    </Wrap>

}

export default Character
const Wrap = styled.div`
    width: 100%;
    height: 49.84vw;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: url(${bgCharacter});
    background-size: cover;
    .bar-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: translateY(-50%);
    }
    .container {
        height: 60%;
        display: flex;
        flex-direction: column;
        .character-text {
            width: 100%;
            max-width: 424px;
            display: flex;
            flex-direction: column;
            .ct-1 {
                margin-bottom: 30px;
            }
            .ct-2 {
                margin-bottom: 40px;
            }
            .ct-bt {
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;
                > a {
                    width: 187px;
                }
            }
        }
    }
    .img-orc {
        display: none;
    }
    ${breakpointsMedias.max767} {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url(${bgCharacter2});
        background-size: cover;
        background-position: center;
        padding: 60px 0 539px 0;
        ${breakpointsMedias.max376} {
            padding: 60px 0 127% 0;
        }
        .bar-top {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            transform: translateY(-50%);
        }
        .container {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            .character-text {
                width: 100%;
                max-width: 358px;
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 1;
                > span {
                    text-align: center;
                }
                .ct-1 {
                    margin-bottom: 16px;
                }
                .ct-2 {
                    margin-bottom: 36px;
                }
                .ct-bt {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-between;
                    > a {
                        width: 171px;
                        &:first-child {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
        .img-orc {
            display: flex;
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 390px;
            z-index: 0;
            > img {
                width: 100%;
                height: auto;
            }
        }
        .img-fire {
            max-width: unset;
            height: 45%;
            opacity: 0.6;
        }
    }
`