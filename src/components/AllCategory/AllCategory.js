import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCategory = ({ category }) => {
    const { id, name, logo, total } = category;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={logo} style={{ height: '200px', width: '200px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>This category has  {total} courses</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/category/${id}`}>
                            <Button variant="primary"> Show All Courses in this category</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllCategory;