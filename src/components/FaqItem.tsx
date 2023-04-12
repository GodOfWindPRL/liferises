import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import configColor from '../configs/configColor'
import { useHover } from '../helpers/hooks/useHover'
export interface FaqItemProps {
    title: string,
    isOpen?: boolean,
    children: React.ReactNode
}
const FaqItem = ({ title, isOpen = false, children }: FaqItemProps) => {
    const [isShow, setIsShow] = useState(isOpen)
    const onToggle = useCallback(() => {
        setIsShow(!isShow)
    }, [isShow])
    const [refHover, isHover] = useHover()
    const [refHoverMinus, isHoverMinus] = useHover()
    return (
        <Wrap className='px-12 py-16 sm:px-30 sm:py-30 bg-black bg-opacity-80 rounded-12 sm:rounded-20 border-2 border-border'>
            <div className={`fic-head flex items-center justify-between ${isShow ? "mb-8 sm:mb-12" : ""} `}>
                <p className='text-primary text-18 sm:text-md font-semibold sm:font-bold '>{title}</p>
                <div className='cursor-pointer' onClick={onToggle}>
                    <div ref={refHover} className={`icon-action ${isShow ? "hidden" : ""}`}>
                        {
                            isHover ?
                                <svg className='w-[20px] sm:w-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" width="4" height="28" fill="url(#paint0_linear_181_290)" />
                                    <rect x="28" y="12" width="4" height="28" transform="rotate(90 28 12)" fill="url(#paint1_linear_181_290)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_181_290" x1="12" y1="0" x2="19.84" y2="1.12" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FE8C00" />
                                            <stop offset="1" stop-color="#F83600" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_181_290" x1="28" y1="12" x2="35.84" y2="13.12" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FE8C00" />
                                            <stop offset="1" stop-color="#F83600" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                :
                                <svg className='w-[20px] sm:w-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" width="4" height="28" fill={isHover ? configColor.colorPrimary : configColor.colorGray} />
                                    <rect x="28" y="12" width="4" height="28" transform="rotate(90 28 12)" fill={isHover ? configColor.colorPrimary : configColor.colorGray} />
                                </svg>
                        }

                    </div>
                    <div ref={refHoverMinus} className={`icon-action ${isShow ? "" : "hidden"}`}>
                        {
                            isHoverMinus ?
                                <svg className='w-[20px] sm:w-[28px]' width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="28" width="4" height="28" transform="rotate(90 28 0)" fill="url(#paint0_linear_87_219)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_87_219" x1="28" y1="0" x2="35.84" y2="1.12" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FE8C00" />
                                            <stop offset="1" stop-color="#F83600" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                :
                                <svg className='w-[20px] sm:w-[28px]' width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="28" width="4" height="28" transform="rotate(90 28 0)" fill="#E6E6E6" />
                                </svg>
                        }

                    </div>

                </div>
            </div>
            <div className='fic-content'>
                {isShow && children}
            </div>
        </Wrap>
    )
}

export default FaqItem
const Wrap = styled.div`
    /* .icon-action{
        svg{
            width: 20px;
        }
    } */
`