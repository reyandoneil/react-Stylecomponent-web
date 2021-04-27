import React from 'react'
import {
    InfoContainer,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrapper,
    Img,
    InfoWrapper,

} from './InfoSectionElements';
import { Button } from '../ButtonElements'

function InfoSaction({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    description,
    darkText,
    buttonLable,
    img,
    alt,
    primary,
    dark
}) {
    console.log(imgStart,'------------>ini id data');
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper id='infoWraper'>
                    <InfoRow imgStart={imgStart} id='infoRow'>
                        <Column1 id='column1'>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to='/'
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark ? 1 : 0}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >{buttonLable}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2 id='column1'>
                            <ImgWrapper>
                                <Img src={img.default} alt={alt} />
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSaction
