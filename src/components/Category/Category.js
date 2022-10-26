import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import './Category.css';
import CardGroup from 'react-bootstrap/CardGroup';
//import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const Category = ({ courses }) => {
    const { _id, title, author, details, image_url, rating, total_view, } = courses;

    return (
        <div className='h-9'>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            className='me-2'
                            roundedCircle
                            src={author?.img}
                            style={{ height: '40px' }}
                        ></Image>
                        <div className='align-items-center'>
                            <p className='mb-0'>Instructor: {author?.Instructor_name}</p>

                        </div>
                    </div>
                    <div>
                        {/* <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt> */}
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <>
                                    {details.slice(0, 100) + '...'}<Link to={`/courses/${_id}`}>Read More</Link>
                                </>
                                :
                                <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        {/* <FaEye className='me-2'></FaEye>
                        <span>
                            {total_view}
                        </span> */}
                        <Link to={`/courses/${_id}`}><Button>Show Details</Button></Link>
                    </div>
                </Card.Footer>
            </Card>

        </div>

    );
};

export default Category;