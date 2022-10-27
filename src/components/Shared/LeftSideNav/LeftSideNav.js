import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return (
        <div className='position-sticky'>
            <h2>Course Category</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='btn btn-warning' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;