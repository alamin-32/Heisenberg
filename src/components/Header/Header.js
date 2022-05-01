import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    return (
        <div className='sticky-top bg-color'>
            <Navbar bg="bg-color" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span className='color'>Heisenberg</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><span className='color'>Home</span></Nav.Link>
                            <Nav.Link as={Link} to="/products"><span className='color'>Products</span></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manageItem"><span className='color'>Manage</span></Nav.Link>
                                </>

                            }


                            <Nav.Link as={Link} to="/blogs"><span className='color'>Blogs</span></Nav.Link>

                            {
                                user ?
                                    <button onClick={logOut}><span className=''>LogOut</span> </button>
                                    :
                                    <Nav.Link as={Link} to="/login"><span className='color'>Log in</span> </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;