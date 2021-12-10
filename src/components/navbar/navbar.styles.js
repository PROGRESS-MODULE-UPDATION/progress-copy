import { Navbar , Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled(Navbar)`
    background: ${({theme}) => theme.navbar.background};
    height: 70px;
`;

export const GenNav = styled(Nav)`
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const NavBrand = styled(Navbar.Brand)`
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    span.small{
        font-size: 12px;
        opacity: 0.6;
    }
`

export const GenLink = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.Nav.text};
    transition-duration: 0.5s;
    &:hover {
        color: ${({theme}) => theme.Nav.alternate}
    }
`

export const NavLogin = styled(Nav)`
    background-color: ${({theme}) => theme.Nav.alternate};
    box-shadow: 0 0 10px ${({theme}) => theme.Nav.alternate};
    color: ${({theme}) => theme.Nav.text};
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
    padding: auto 15px;
    transition-duration: 0.5s;
    &:hover {
        box-shadow: 0 0 25px ${({theme}) => theme.Nav.alternate};
    }
`

export const LoginLink = styled(NavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${({theme}) => theme.accent.counter};
    padding-left: 1rem !important;
    padding-right: 1rem !important;
`