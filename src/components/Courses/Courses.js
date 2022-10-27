import React from 'react';
import { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Premium from '../Premium/Premium';


const Courses = () => {
    const courses = useLoaderData();
    const { _id, title, details, image_url, category_id, author } = courses;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
    return (
        <div>
            <div className='d-flex mb-2'>
                <Button onClick={handlePrint}>Download pdf/Print</Button>
            </div>
            <div ref={componentRef}>
                <Card>
                    <Card.Header className='d-flex justify-content-between align-items-center'>

                    </Card.Header>
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
                            <Link to={`/premium/${_id}`}>
                                <Button variant="primary">Get premium
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Courses;