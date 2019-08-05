import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <div>
            <h1>Personal info page</h1>
            <p>
                Should list personal info and insurance plan.
            </p>
            <Link to='/'>
                <button className="btn btn-primary">Go home</button>
            </Link>
        </div>
    );
}

export default MyPage;