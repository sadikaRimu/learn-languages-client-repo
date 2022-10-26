import { Container } from 'react-bootstrap';
import React from 'react';
import { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext, ThemeContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import ReactSwitch from 'react-switch';

//import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar sticky="top" id={theme} collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container className='position-sticky'>
                <Navbar.Brand><Link to='/'>
                    <img src='../../../../public/plLogo.png' alt='' />
                </Link></Navbar.Brand>
                <Navbar.Brand><Link to='/'>Learn Programing Languages</Link></Navbar.Brand>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='btn btn-primary' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='btn btn-primary' to='/courseCategory'>Courses</Link> </Nav.Link>
                        <Nav.Link><Link className='btn btn-primary' to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='btn btn-primary' to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    {/* <Button onClick={handleLogOut} variant="light">Logout</Button> */}
                    <Nav>
                        <>
                            {
                                user ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="light">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='btn btn-primary me-2' to='/login'>Login</Link>
                                        <Link className='btn btn-primary me-2' to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
                                    : <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;