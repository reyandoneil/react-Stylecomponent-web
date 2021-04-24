import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

function index({toggle}) {
    return (
        <>

            <Nav >
                <NavbarContainer>
                    <NavLogo to="/">EDULEX</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavLinks to="about">About</NavLinks>
                        <NavLinks to="discover">Discover</NavLinks>
                        <NavLinks to="service">Services</NavLinks>
                        <NavLinks to="signUp">Sign Up</NavLinks>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default index
