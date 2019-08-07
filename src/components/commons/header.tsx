import * as React from 'react';
import '../css/header.scss'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link>
                        <Link to='/' className='router-link'>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to='/insurance-plans' className='router-link'>Insurance Plans</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to='/my-page' className='router-link'>My Page</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;