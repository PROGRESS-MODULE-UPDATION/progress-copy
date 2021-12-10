import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NavigationBar from '../navbar';

export const Layout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row className="mx-auto">
                    <Col md={12}>
                    {children}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
