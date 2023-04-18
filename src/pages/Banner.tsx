import styled from 'styled-components'
import bgBanner from "assets/images/bg-banner.png"
import bgBanner2 from "assets/images/bg-banner-2.png"
import { breakpointsMedias } from 'configs/breakpoints'

const Banner = () => {
    return <Wrap>
        <img src={bgBanner} alt="" className='banner-bg' />
        <div className="shadow-bottom"></div>
    </Wrap>

}

export default Banner
const Wrap = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    position: relative;
    min-height: 54.16vw;
    .banner-bg {
        width: 100%;
        height: 100%;
    }
    .shadow-bottom {
        display: none;
    }
    ${breakpointsMedias.max767} {
        min-height: 138vw;
        padding-bottom: 7vw;
        .banner-bg {
            content: url(${bgBanner2});
        }
        .shadow-bottom {
            display: flex;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 17.7vw;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        }
    }
`