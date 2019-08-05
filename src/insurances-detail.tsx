import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const InsuranceDetail = () => {
    return (
        <div>
            <h1>Plan A</h1>
            <p>
                Should plan cost and coverage
            </p>
            <Link to='/my-page'>
                <button className="btn btn-primary">I take this plan</button>
            </Link>
        </div>
    );
}

export default InsuranceDetail;