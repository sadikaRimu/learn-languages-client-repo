import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import './CourseCategory.css'

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
                        <h2>This category has: {courseCategory.length} courses</h2>
                        <div className='courses-container'>

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