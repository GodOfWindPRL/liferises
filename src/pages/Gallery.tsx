
import { breakpointsMedias } from 'configs/breakpoints'
import styled from 'styled-components'
import bgGallery from '../assets/images/bg-gallery.png'
import configColor from '../configs/configColor'
const imgSource = (index: number) => {
    return require(`../assets/images/gallery/gallery${index}.png`)
}
const Gallery = () => {
    return (
        <Wrap className='pt-[72px] sm:pt-[172px] px-16 sm:px-20 xl:px-[60px] pb-[30px] sm:pb-[97px]'>
            <p className='text-lg text-gray uppercase font-bold mb-12 sm:mb-24'>Gallery</p>
            <div className='grid grid-cols-2 grid-rows-6 sm:grid-cols-5 sm:grid-rows-3  gap-[16px] sm:gap-[10px] xl:gap-x-[28.75px] xl:gap-y-[30px]'>
                {
                    Array(12).fill(1).map((value, index) => {
                        const classEnd = index === 11 ? " col-start-1 col-end-3 row-start-3 row-end-5 sm:col-end-6 sm:col-span-2 sm:row-end-4 sm:row-span-2" : ""
                        const listHidden = [5, 7, 8]
                        const imageHidden = (listHidden.includes(index)) ? "hidden sm:block" : ""
                        console.log({ index, classEnd })
                        return (
                            <div key={index} className={`${classEnd} ${imageHidden} rounded-12 sm:rounded-20  overflow-hidden item-gallery before:rounded-12 sm:before:rounded-20`}>
                                <img alt="" src={imgSource(index + 1)} className="inline" />
                            </div>
                        )
                    })
                }
            </div>
        </Wrap>
    )
}

export default Gallery
const Wrap = styled.div`
    position: relative;
    :before{
        content:'';
        background-image: url(${bgGallery});
        width: 100%;
        height: calc(100%);
        position: absolute;
        left: 0;
        top:0;
        background-size: cover ;
        z-index: -1;
        background-position: top center;
    }
    .item-gallery{
        position: relative;

        :before{
            content:"";
            width: 100%;
            height: 100%;
            border:2px solid ${configColor.colorBorder};
            position: absolute;
            left: 0;
            top:0;
            background-color: transparent;
            /* border-radius: 20px; */
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        :hover{
            :before{
                border:4px solid ${configColor.colorPrimary};
            } 
        }
    }
    ${breakpointsMedias.min768} {
            margin-top: -60px;
    }
    ${breakpointsMedias.min1200} {
            margin-top: -140px;
    }
`