import * as React from 'react';
import '../css/header.scss'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Nav activeKey="/home">
                <Nav.Item>
                        <Link to='/' className='router-link'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                        <Link to='/insurance-plans' className='router-link'>Insurance Plans</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/my-page' className='router-link'>My Page</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;