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
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
    .logo {
        width: 100%;
        height: 100%;
        > img {
            width: 100%;
            height: 100%;
        }
    }
    &:hover {
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
            box-shadow: 0 0 0 0 #fe8c0038, inset 0 0 0 #fe8c0038;
            /* box-shadow: inset 0 0 10px #f8a100; */
        }
        50% {
            -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
            box-shadow: 0 0 20px 10px #fe8c0038, inset 0 0 40px #fe8c0038;
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
    }
    ${breakpointsMedias.min1200} {
        width: 90px;
        height: 90px;
        margin-right: 22px;
    }
`