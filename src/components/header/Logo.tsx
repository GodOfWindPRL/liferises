import iconLogo from 'assets/images/logo.png'
import iconLogo2 from 'assets/images/logo-mobile.png'
import { breakpointsMedias } from 'configs/breakpoints'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ILogo {
    noMobile?: boolean
}

const Logo = ({ noMobile }: ILogo) => {
    return (
        <Wrap>
            <Link to="" className="logo">
                <img className={`${noMobile ? "" : "desktop-logo"}`} src={iconLogo} alt="" />
                {!noMobile && <img className='mobile-logo' src={iconLogo2} alt="" />}
            </Link>
        </Wrap>
    )
}

export default Logo

const Wrap = styled.div`
    width: 171px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: auto;
    display: flex;
    .desktop-logo {
        display: none;
    }
    .logo {
        width: 100%;
        height: 30px;
        position: relative;
        margin-top: 6px;
        > img {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: auto;
            transform: translateY(-50%);
        }
    }
    ${breakpointsMedias.min768} {
        .logo {
            margin-top: 0;
        }
    }
    ${breakpointsMedias.min1200} {
        /* width: 90px;
        height: 90px; */
        margin-right: 22px;
        width: 262px;
        height: 50px;
        ;
        .desktop-logo {
            display: flex;
        }
        .mobile-logo {
            display: none;
        }
        .logo {
            width: 100%;
            height: 55px;
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
    }
    ${breakpointsMedias.min1600} {
        /* width: 90px;
        height: 90px; */
        margin-right: 22px; 
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
    }
`