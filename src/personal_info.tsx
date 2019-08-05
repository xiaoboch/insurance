import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <div>
            <h1>Personal info filling page</h1>
            <Link to='/insurances'>
              <button className="btn btn-primary">choose plans</button>
            </Link>
        </div>
    );
}

export default PersonalInfo;