import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'


export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#3FB1B5' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    color: white;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({ primary }) => (primary ? '#fff' : '#01BF71')};
        color: black;
    }

    @media screen and (max-width: 768px){
            margin: auto;
        }

`


