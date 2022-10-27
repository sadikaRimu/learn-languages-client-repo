import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
//import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                // handleEmailVerification();

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);

    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter photo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="ms-2">
                Already registered? <Link to='/login'>Login</Link>
            </Form.Text>
            <Form.Text className="text-danger">
                <strong>{error}</strong>
            </Form.Text>

        </Form>
    );
};

export default Register;