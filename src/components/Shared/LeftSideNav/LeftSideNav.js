import { GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [categories, setCategories] = useState([]);
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error', error))
    }
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
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-warning"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button variant="outline-warning"><FaGithub></FaGithub> Login With Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;