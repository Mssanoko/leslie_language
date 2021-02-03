import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from './ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroT, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroT>Leslie Language Services</HeroT>
                <HeroP>Private French Tutor</HeroP>
                <HeroBtnWrapper>
                    <Button to='home' onMouseEnter={onHover} onMouseLeave={onHover} primary="true">
                        Enter {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection; 


