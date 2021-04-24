import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const SidebarContainer = styled.aside`
    background: #19283A;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    buttom: ${({ isOpen }) => (isOpen ? '30' : '-100%')};
    background: #19283A;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    buttom: ${({ isOpen }) => (isOpen ? '30' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #ffff
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    bacground: transparant;
    font-size: 2rem;
    cursor: pointer;

`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    // margin-left: -50px;
    @media screen and (max-widht: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #3FB1B5;
        transition: 0.2s ease-in-out; 
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #3FB1B5;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    crusor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`;

