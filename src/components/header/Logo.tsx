import iconLogo from 'assets/images/logo.png'
import { breakpointsMedias } from 'configs/breakpoints'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
    return (
        <Wrap>
            <Link to="" className="logo">
                <img className='' src={iconLogo} alt="" />
            </Link>
        </Wrap>
    )
}

export default Logo

const Wrap = styled.div`
    width: 292px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: auto;
    display: flex;
    .logo {
        width: 100%;
        height: 60px;
        position: relative;
        > img {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: auto;
            transform: translateY(-50%);
        }
    }
    ${breakpointsMedias.min1200} {
        /* width: 90px;
        height: 90px; */
        margin-right: 22px;
    }
`