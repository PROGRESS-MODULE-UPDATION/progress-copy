import React from 'react';
import {Container} from 'react-bootstrap'
import { GenNav, NavBrand, NavBar, GenLink, NavLogin, LoginLink } from './navbar.styles';
import { InlineIcon } from '@iconify/react';

const NavigationBar = ()  => {
    return(
        <NavBar variant="dark" expand="lg">
            <Container fluid className="px-3 px-md-4">
                <NavBrand className="font-weight-bold me-5">
                    <GenLink className="nav-link d-flex flex-column" to="/">
                        Genosis
                        <span className="small">by Playwithbot</span>
                    </GenLink>
                </NavBrand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <GenNav className="me-auto">
                        <GenLink className="nav-link mx-3" to="/teach">
                            Teach on Genosis
                        </GenLink>
                        <GenLink className="nav-link mx-3" to="/Pricing">
                            Pricing
                        </GenLink>
                        <GenLink className="nav-link mx-3" to="/Contact">
                            Contact Us
                        </GenLink>
                    </GenNav>
                    <NavLogin>
                        <LoginLink className="nav-link" to="/Login">
                            <span>Login </span>
                            <InlineIcon icon="ri:login-circle-line" className="ms-3" />
                        </LoginLink>
                    </NavLogin>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
};

export default NavigationBar;