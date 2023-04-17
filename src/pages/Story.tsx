import styled from 'styled-components'
import frameStory from "assets/images/frame-story.png"
import barStory from "assets/images/story-bar.png"
import bgStory from "assets/images/bg-story.png"

const Story = () => {
    return <Wrap>
        <div className="story">
            <img src={frameStory} alt="" />
            <div className="story-text">
                <span className="size-2 color-golden">Game story</span>
                <span className="size-1 color-golden">About Life Rises world</span>
                <img src={barStory} alt="" />
                <span className="size-0 color-gold">Life Rises takes place in a fantasy world, where the fight for survival everyday against dark forces is the norm. On an neutral land, where the last remnant of civilizations gathers, is now the center of it all.</span>
                <br />
                <br />
                <span className="size-0 color-gold">Together, they survive, prolonging what's left and fighting the battles against destructive forces. Go on a journey along side your daring and trusted comrades, immerse yourselves in brutal and glorious battles, to put an end to evil, to bring back hope and life to the world, together!</span>
            </div>
        </div>
    </Wrap>

}

export default Story
const Wrap = styled.div`
    width: 100%;
    /* height: 68.54vw; */
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: url(${bgStory});
    background-size: cover;
    padding: 140px 0;
    .story {
        margin-top: 10px;
        width: 680px;
        height: 986px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        > img {
            width: 100%;
            height: auto;
        }
        .story-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 223px 113px 0 113px;
            > span {
                text-align: center;
            }
            > img {
                width: 60%;
                height: auto;
                margin: 25px 0;
            }
        }
    }
`