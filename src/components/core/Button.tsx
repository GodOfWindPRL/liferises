import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import LoadingSpinner from './LoadingSpinner';
import configColor from 'configs/configColor';
import { breakpointsMedias } from 'configs/breakpoints';
import bgBt from "assets/images/bg-bt.png"

interface IB extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    isLoading?: boolean,
    sizeBt?: "small" | "normal",
    className?: string,
    disabled?: boolean,
    variant?: "fill" | "border",
}

const Button = ({ text, isLoading = false, sizeBt = "normal", className, disabled = false, variant = "border", ...props }: IB) => {
    const { t } = useTranslation();
    return (
        <Wrap className={`${isLoading ? "bt-loading" : ""} bt-${sizeBt} ${className} style-${variant}`} disabled={disabled || isLoading} {...props}>
            <span className={`color-golden size-0`}>{!!isLoading ? <LoadingSpinner />
                : <>
                    {t(text)}
                </>}</span>
        </Wrap>
    )
}
export default Button

const Wrap = styled.button`
    /* max-width: 100%; */
    width: 100%;
    padding: 0 12px;
    height: 36px;
    border-radius: 10px;
    background-image: url(${bgBt});
    background-size: 100% 100%;
    &.bt-small {
        height: 28px;
        border-radius: 6px;
        padding: 0 7px;
        min-width: 68px;
    }
    > span {
        transition: 0.3s;
    }
    /* &:active,
    &:focus, */
    &:hover {
        > span {
            text-shadow: 0px 0px 32px rgb(221, 207, 167), 0px 8px 24px #7c7373;
        }
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }
    &.bt-loading {
        opacity: 0.4;
        cursor: not-allowed;
        :hover {
            background: ${configColor.colorBG};
            border: 1px solid ${configColor.colorPrimary};
        }
    }
    > span {
        display: flex;
        align-items: center;
        /* > svg {
            margin-right: 6px;
            font-size: 16px;
        } */
        > svg {
            /* width: 12px;
            height: 12px; */
            margin-right: 6px;
            /* animation: rotate-center-2 1s linear infinite ; */
        }
    }
    @keyframes rotate-center-2 {
        0% {
            transform: rotate(0);
        }
        100% {
           transform: rotate(360deg);
        }
    }
    ${breakpointsMedias.min1200} {
        height: 40px;
        &.bt-small {
            height: 32px;
        }
    }
`