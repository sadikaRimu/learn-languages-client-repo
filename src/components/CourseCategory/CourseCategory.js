import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const CourseCategory = () => {
    const courseCategory = useLoaderData();
    return (
        <div className='d-flex'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                        <div>
                            <h2>course category page: {courseCategory.length}</h2>
                            {
                                courseCategory.map(courses => <Category
                                    key={courses._id}
                                    courses={courses}
                                ></Category>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default CourseCategory;