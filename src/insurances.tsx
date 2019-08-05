import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Insurances = () => {
    return (
        <div>
            <h1>Choose your plan</h1>
            <Link to='/insurance-detail'>
                <button className="btn btn-primary">choose plan A</button>
            </Link>
        </div>
    );
}

export default Insurances;