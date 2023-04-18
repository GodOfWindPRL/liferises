import styled from 'styled-components'
import { breakpointsMedias } from 'configs/breakpoints'
import Banner from 'pages/Banner'
import About from 'pages/About'
import Story from 'pages/Story'
import Character from 'pages/Character'
import Feature from 'pages/Feature'
import TokenMetric from 'pages/TokenMetric'
import asBg from 'assets/images/as-bg.png'
import Roadmap from 'pages/Roadmap'
import Team from 'pages/Team'
import Footer from 'components/Footer/Footer'
import { useEffect } from 'react'

const Homepage = () => {
    useEffect(() => {
        const appear = document.querySelectorAll('.appear') as any;
        const appear2 = document.querySelector('.appear-right') as any;
        const appear3 = document.querySelector('.appear-left') as any;
        const cb = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('inview');
                } else {
                    entry.target.classList.remove('inview');
                }
            });
        }
        const io = new IntersectionObserver(cb);
        for (let item of appear) {
            io.observe(item);
        }
        appear2 && io.observe(appear2);
        appear3 && io.observe(appear3);
    }, [])

    return (<Wrap>
        <Banner />
        <About />
        <Story />
        <Character />
        <Feature />
        <TokenMetric />
        <Roadmap />
        <Team />
        <Footer />
    </Wrap>)
}

export default Homepage

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(${asBg});
    background-size: 17% 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 60px;
    min-height: 100%;
    background-color: #1E1E1E;
    .appear {
        transition: all 0.8s;
        opacity: 0;
        transform: translateY(40px);
    }
    .appear-right {
        transition: all 0.8s;
        opacity: 0;
        transform: translateX(40px);
    }
    .appear-left {
        transition: all 0.8s;
        opacity: 0;
        transform: translateX(-40px);
    }
    .appear.inview,
    .appear-right.inview,
    .appear-left.inview {
        opacity: 1;
        transform: none;
        transition-delay: 0.3s;
    }
    ${breakpointsMedias.min1200} {
        margin-top: 0;
    }
    ${breakpointsMedias.min1600} {
        margin-top: 0;
    }
`

