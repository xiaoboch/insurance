import * as React from 'react';
import './../css/header.scss'
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/my-page">Insurance Plans</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/my-page">My Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about-us">About us</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;