import styled from 'styled-components'
import iconMenu from 'assets/images/icon-menu.png'
import iconClose from 'assets/images/icon-close.png'
import { useState } from 'react';

interface IMenuButton {
    onClick: () => void,
    show: boolean
}

const MenuButton = ({ onClick, show }: IMenuButton) => {

    return (
        <Wrap onClick={onClick} >
            <div className="menu-icon" >
                <img src={show ? iconClose : iconMenu} alt="menu" />
            </div>
        </Wrap>
    )
}

export default MenuButton

const Wrap = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 4px;
    .menu-icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        > img {
            width: 100%;
            height: auto;
        }
    }
    .menu-list-active {
        transform: translateX(0%);
    }
    
`