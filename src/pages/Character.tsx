import Button from 'components/core/Button'
import styled from 'styled-components'

const Character = () => {
    return <Wrap>
        <div className="container">
            <div className="character-text">
                <span className="size-2 color-golden ct-1">Character</span>
                <span className="size-0 color-gold ct-2">These are player-created characters. Each character has its own unique features, expressing the distinct personalities or preferences of the player.</span>
                <div className="ct-bt">
                    <Button text='Free' />
                    <Button text='Craft' />
                </div>
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
            }
        }
    }
`