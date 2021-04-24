import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'


export const HeroContainer = styled.div`
    // background: #0c0c0c;
    display: grid;
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const VideoBg = styled.div`
    width: 100%;
    height: 100vh;
    --o-object-fit: cover;
    object-fit: cover;
    // background: #232a34;
    filter: brightness(40%);

`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 3;
    max-width: 1200px;
    position: absolut;

    margin-bottom: 10vw;   @media screen and (max-width: 768px){
        flex-direction: column;
        }
`;

export const HeroLeftContent = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;                   


    @media screen and (max-width: 768px){
        display: none;
    }
    
    `;

export const HeroRightContent = styled.div`
    margin: auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        }
`;

export const ImageContent = styled.img`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;

    
    @media screen and (max-width: 768px){
    display: none;
        }
    
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
    `;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 32px;
    text-align: left;
    margin-bottom: 10px;

    //Screen change
    @media screen and (max-width: 768px){
        font-size: 32px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;
export const HeroP = styled.p`
    color: #fff;
    font-size: 18px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 18px;
        text-align: center;

    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`;

export const HerButtonWwraper = styled.div`
    margin-top: 32px;
    max-width:180px;
    display: flex;
    flex-direction: column;
    align-items: center'
    `;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    `;

