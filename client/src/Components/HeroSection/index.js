import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroContent,
    HeroLeftContent,
    ImageContent,
    HeroRightContent,
    HeroH1,
    HeroP,
    HerButtonWwraper,
    ArrowForward,
    ArrowRight
} from './HeroSectionElements'

import img from '../../Assets/Img/5 SCENE.svg'


function HeroSection() {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroLeftContent>
                        <ImageContent src={img} />
                    </HeroLeftContent>
                    <HeroRightContent>
                        <HeroH1>
                            #EDULEX
                    </HeroH1>
                        <HeroP>
                            Belajar dulu jadi programer handal setelah kerja baru bayar...Mau??
                    </HeroP>
                        <HerButtonWwraper>
                            <Button
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                            >
                                Get started {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>
                        </HerButtonWwraper>
                    </HeroRightContent>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
