import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCategory from '../AllCategory/AllCategory';
import './Home.css';
//import Image from 'react-bootstrap/Image';
//import Image from '../../images/LearnPrograming.png'

const Home = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            {/* <Image src='../../images/LearnPrograming.png' alt='' ></Image> */}
            <h3 className='text-center mb-3'>Choose your courses category</h3>
            <div className='all-category'>
                {
                    courseCategory.map(category => <AllCategory
                        key={category.id}
                        category={category}
                    ></AllCategory>)
                }
            </div>
        </div>
    );
};

export default Home;