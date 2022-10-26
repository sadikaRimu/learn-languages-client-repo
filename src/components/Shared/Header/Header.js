import { Container } from 'react-bootstrap';
import React from 'react';
import { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
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
        <Navbar id={theme} collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>
                    <img src='../../../../public/plLogo.png' alt='' />
                </Link></Navbar.Brand>
                <Navbar.Brand><Link to='/'>Learn Programing Languages</Link></Navbar.Brand>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courseCategory'>Courses</Link> </Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link>Theme: light</Link></Nav.Link>
                    </Nav>
                    {/* <Button onClick={handleLogOut} variant="light">Logout</Button> */}
                    <Nav>
                        <>
                            {
                                user ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button onClick={handleLogOut} variant="light">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
                                    : <></>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;