import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {
    const course = useLoaderData();
    console.log(course);
    const { _id, title, author, category_id } = course;
    return (
        <div className='mx-5'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <p>Course Id: {_id}</p>
                </Card.Header>
                <span className='px-5 pt-5'><p className='mb-0'>Instructor: {author?.Instructor_name}</p></span>
                <span className='px-5'> <p>Published:  {author?.published_date}</p></span>
                <Card.Body className='px-5'>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="primary">Confirm</Button>
                        </Link>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="light">Cancel
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;