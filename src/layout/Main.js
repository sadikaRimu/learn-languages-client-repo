import React from 'react';
import { Container } from 'postcss';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Footer from '../components/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                        <Outlet>
                        </Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;