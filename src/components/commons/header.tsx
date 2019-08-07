import * as React from 'react';
import '../css/header.scss'
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/insurance-plans">Insurance Plans</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link href="/my-page">My Page</Nav.Link>
                </Nav.Item> */}
            </Nav>
        </div>
    );
}

export default Header;