import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Shared/Header/Header';
import LeftSideNav from '../components/Shared/LeftSideNav/LeftSideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>

                    </Col>
                    <Col lg='7'>
                        <Outlet>
                        </Outlet>
                    </Col>
                    <Col lg='3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;