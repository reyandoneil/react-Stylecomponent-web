import React, { useState } from 'react'
import { Navbar, Sidebar, HeroSection, InfoSection } from '../Components/index'
import { homeObjOne } from '../Components/InfoSaction/data'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            {isOpen && (
                <Sidebar isOpen={isOpen} toggle={toggle} />
            )}
        </>
    )
}

export default Home
