import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    const { title, details, image_url, category_id, author } = courses;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} style={{ height: '100px', width: '100px' }} />
            <span><p className='mb-0'>Instructor: {author?.Instructor_name}</p></span>
            <span> <p>Published:  {author?.published_date}</p></span>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All Courses in this category</Button>
                    </Link>
                    <Link to={'/premium'}>
                        <Button variant="primary">Go for premium</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Courses;