import styled from 'styled-components'
import bgBanner from "assets/images/bg-banner.png"
import bgBanner2 from "assets/images/bg-banner-2.png"
import { breakpointsMedias } from 'configs/breakpoints'

const Banner = () => {
    return <Wrap>
        <img src={bgBanner} alt="" className='banner-bg' />
    </Wrap>

}

export default Banner
const Wrap = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    position: relative;
    /* height: 54.17vw; */
    .banner-bg {
        width: 100%;
        height: 100%;
    }
    ${breakpointsMedias.max767} {
        .banner-bg {
            content: url(${bgBanner2});
        }
    }
`