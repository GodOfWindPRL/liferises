import { useWidthScreen } from 'helpers/useScreen'
import { useState } from 'react'
import styled from 'styled-components'
import { breakpointsMedias } from '../../configs/breakpoints'
import Logo from './Logo'
import Menu from './Menu'
import MenuButton from './MenuButton'
import bgHeader from 'assets/images/header-bg.png'
import bgHeader2 from 'assets/images/bg-header-2.png'

const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    const { width } = useWidthScreen()
    return (
        <Wrap className=''>
            <img src={bgHeader} alt="" className='bg-header' />
            <div className="wrap-header">
                <Logo />
                <div className="menu ">
                    {width >= 1200 ? <Menu onClose={() => { }} />
                        : <MenuButton onClick={() => { setShow(!show) }} show={show} />}
                </div>
            </div>
            <div className={`menu-mobile ${show && "menu-mobile-active"}`} onClick={() => { setShow(false) }}>
                <Menu onClose={() => { setShow(false) }} />
            </div>
        </Wrap>
    )
}

export default Header

const Wrap = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 2;
    background-color: #1E1E1E;
    .bg-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 77px;
        content: url(${bgHeader2});
    }
    .wrap-header {
        display: flex;
        align-items: center;
        padding: 0 14px;
        width: 100%;
        height: 100%;
        z-index: 1;
       
    }
    .menu-mobile {
        position: fixed;
        width: 100%;
        display: flex;
        height: 100%;
        transition: 0.3s;
        top: 60px;
        right: -100%;
        z-index: 0;
        background-color: #000000b4;
    }
    .menu-mobile-active {
        right: 0;
    }
    ${breakpointsMedias.min768} {
        .bg-header {
            content: url(${bgHeader});
        }
        /* .wrap-header {
            .menu {
                flex: 1;
            }
        } */
        /* .menu-mobile {
            display: none;
        } */
    }
    
    ${breakpointsMedias.min1200} {
        position: unset;
        height: 80px;
        .bg-header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 112px;
            content: url(${bgHeader});
        }
        .wrap-header {
            padding: 0 28px;
            max-width: 1300px;
            margin: 0 auto;
            .menu {
                flex: 1;
                height: 100%;
            }
        }
        .menu-mobile {
            display: none;
        }
    }
    ${breakpointsMedias.min1600} {
        height: 100px;
        .bg-header {
            height: 132px;
        }
        .wrap-header {
            padding: 0 40px;
            max-width: 1500px;
            margin: 0 auto;
            .menu {
                flex: 1;
                height: 100%;
            }
        }
        .menu-mobile {
            display: none;
        }
    }
`