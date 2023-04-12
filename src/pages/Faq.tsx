import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import bgFaq from '../assets/images/bg-faq.png'
import bgFaqMobile from '../assets/images/bg-faq-mobile.png'
import FaqItem, { FaqItemProps } from '../components/FaqItem'
import { useLockBodyScroll } from '../helpers/hooks/useLockBodyScroll'
import { useWidthScreen } from '../helpers/hooks/useScreen'
import imgFaq from '../assets/images/img-faq.png'
import { breakpointsMedias } from 'configs/breakpoints'

const Faq = () => {
    const { height } = useWidthScreen()
    useLockBodyScroll()
    const listFaq: FaqItemProps[] = [
        {
            title: "What is TheMeo?",
            isOpen: true,
            children:
                <>
                    <p className='text-gray'>TheMeo is an exclusive art collectibles PFP collection of 777 unique NFTs, building to be an innovative IP brand with an exciting lore driven by the community. This NFT project is the starting point of an ecosystem built around web3 long term enthusiasts, contributors and builders. TheMeo will be the playground for every talents and people who needs support and visibility in their web3 journey. </p>
                </>
        },
        {
            title: "Who is behind TheMeo?",
            isOpen: false,
            children:
                <>
                    <p className='text-gray'>TheMeo is brought by a team of experienced entrepreneurs and artists from web2 and web3 based in Vietnam and the USA covering the following industries: e-commerce, sales & marketing, manufacturing, import-export, commercial real estate properties, cinema, music, design and arts, non-profit organization, crypto and NFTs, blockchain technology advancement. TheMeo is a United States based LLC, with offices in Vietnam. </p>
                </>
            // <>
            //     <p className='mb-16'>First and foremost, breathtaking NFTs that are sure to blow your mind. Each of the 777 unique art collectible PFP NFTs is a one-of-a-kind masterpiece, created with love and attention to detail by Hato himself.</p>
            //     <p className='mb-16'>But The Meo is more than just art – it's an immersive, engaging world that draws you in and invites you to explore.</p>
            //     <p className='mb-16'>And that's just the beginning. The Meo is also an innovative IP brand with an exciting backstory crafted by the community. It's a platform where everyone's talents are welcomed, and where anyone can find visibility and support in the web3 space. And with MetaAngel's latest project – a Technology Solutions NFT website integrating AI and other tools for mass adoption, with a <span className='text-primary'>MOONzii membership for MEO holders – The Meo is poised to shake up the web3 world like never before.</span></p>
            //     <p>So what are you waiting for? Join the community, explore the world of The Meo, and discover the magic for yourself. The Meo is ready and waiting for you!</p>
            // </>
        },
        {
            title: "When is mint?",
            isOpen: false,
            children:
                <>
                    <p className='text-gray'>The mint date will be announced soon…</p>
                </>
        },
        {
            title: "What is the mint price? ",
            isOpen: false,
            children:
                <>
                    <p className='text-gray'>No price has been set yet, it will be decided prior to the mint and adapting to the market conditions</p>
                </>
        },
        {
            title: "Where to find the last updates about TheMeo?",
            isOpen: false,
            children:
                <>
                    <p className='mb-16'>Currently, all announcements will be on the official Twitter and Discord. The website will come soon…</p>
                    <div>
                        <a className='text-primary mb-8' href="https://twitter.com/TheMeoNFT" target="_blank" rel="noreferrer">https://twitter.com/TheMeoNFT</a>
                    </div>
                    <div>
                        <a className='text-primary' href="https://discord.gg/themeo" target="_blank" rel="noreferrer">https://discord.gg/themeo </a>
                    </div>
                </>
        },
        {
            title: "So what can you expect from The Meo?",
            isOpen: false,
            children:
                <>
                    <p className='mb-16 text-gray'>Each of the 777 unique art collectible PFP NFTs is a one-of-a-kind masterpiece, created with love and attention to detail by Hato himself.</p>
                    <p className='mb-16 text-gray'>But TheMeo is more than just art – it's an immersive, engaging world that draws you in and invites you to explore.</p>
                    <p className='mb-16 text-gray'>And that's just the beginning. TheMeo is also an innovative IP brand with an exciting backstory crafted by the community. It's a platform where everyone's talents are welcomed, and where anyone can find visibility and support in the web3 space. And with MetaAngel's latest project – a Technology Solutions NFT website integrating AI and other tools for mass adoption, with a <span className='text-primary'>MOONzii membership for MEO holders – The Meo is poised to shake up the web3 world like never before. </span></p>
                </>
        },
    ]
    // useLayoutEffect(() => {
    //     if (width > 640) {
    //         // Get original body overflow
    //         const originalStyle = window.getComputedStyle(document.documentElement).overflow
    //         // Prevent scrolling on mount
    //         document.documentElement.style.overflow = 'hidden'
    //         // Re-enable scrolling when component unmounts
    //         return () => { document.documentElement.style.overflow = originalStyle };
    //     }

    // }, [width]);
    return (
        <Wrap height={height} className='pt-[72px] sm:pt-[172px] px-16 sm:px-20 xl:px-[60px] pb-[97px] after:hidden sm:after:block'>
            <p className='text-24 sm:text-lg text-gray uppercase font-bold mb-12 sm:mb-24 '>FREQUENTLY ASKED QUESTIONS</p>
            <div className='w-full sm:w-[63%] sm:max-w-[1100px] max-h-[70vh] sm:max-h-[70vh] overflow-auto scrollbar pr-[5px] sm:pr-20'>
                {listFaq.map(({ title, children, isOpen }: FaqItemProps, index) =>
                    <div key={index} className={`faq-item mb-16 sm:mb-30`}>
                        <FaqItem title={title} isOpen={isOpen}>
                            {children}
                        </FaqItem>
                    </div>
                )}
            </div>

        </Wrap>
    )
}

export default Faq
interface WrapProps {
    height: number
}
const Wrap = styled.div<WrapProps>`
    position: relative;
    :before{
        content:'';
        background-image: url(${bgFaqMobile});
        width: 100%;
        height: ${({ height }) => height}px;
        position: absolute;
        left: 0;
        top:0;
        background-size: cover ;
        z-index: -1;
        background-position: top center;
        background-repeat: no-repeat;
        ${breakpointsMedias.min640}{
            background-image: url(${bgFaq});
        }
    }
    :after{
        content:'';
        background-image: url(${imgFaq});
        width: 100%;
        height: ${({ height }) => height}px;
        position: absolute;
        right: 0;
        top:0;
        background-size: auto ;
        background-repeat: no-repeat;
        background-position: right;
        z-index: -1;
    }
    ${breakpointsMedias.min768} {
            margin-top: -60px;
    }
    ${breakpointsMedias.min1200} {
            margin-top: -140px;
    }
`