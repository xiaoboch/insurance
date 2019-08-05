import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <div>
            <h1 className='page-title'>Register</h1>
        
            <Link to='/insurances'>
              <button className="btn btn-primary">Save</button>
            </Link>
        </div>
    );
}

export default PersonalInfo;