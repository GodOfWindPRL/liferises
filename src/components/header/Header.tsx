import { useWidthScreen } from 'helpers/useScreen'
import { useState } from 'react'
import styled from 'styled-components'
import { breakpointsMedias } from '../../configs/breakpoints'
import Logo from './Logo'
import Menu from './Menu'
import MenuButton from './MenuButton'
import bgHeader from 'assets/images/header-bg.png'

const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    const { width } = useWidthScreen()
    return (
        <Wrap className=''>
            <img src={bgHeader} alt="" className='bg-header'/>
            <div className="wrap-header">
                <Logo />
                <div className="menu ">
                    {width >= 768 ? <Menu onClose={() => { }} />
                        : <MenuButton onClick={() => { setShow(!show) }} show={show} />}
                </div>
            </div>
            <div className={`menu-mobile ${show && "menu-mobile-active"}`}>
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
    height: 100px;
    z-index: 1;
    .bg-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
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
        height: 100%;
        transition: 0.3s;
        top: 0;
        right: -100%;
        z-index: 0;
    }
    .menu-mobile-active {
        right: 0;
    }
    ${breakpointsMedias.min768} {
        position: unset;
        .wrap-header {
            .menu {
                flex: 1;
            }
        }
        .menu-mobile {
            display: none;
        }
    }
    ${breakpointsMedias.min1200} {
        .wrap-header {
            padding: 0 54px;
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