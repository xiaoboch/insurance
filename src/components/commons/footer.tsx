import * as React from 'react';
import '../css/footer.scss'
import {Nav} from 'react-bootstrap';


const Footer = () => (
    <div className='footer'>
        <div className='item'>
            <Nav.Item>
                <Nav.Link href="bouvet.no" class='footer-company'>bouvet.no</Nav.Link>
            </Nav.Item>
        </div>
    </div>
);

export default Footer;