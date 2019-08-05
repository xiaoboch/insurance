import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the best insurance service in the world!</h1>

            <Link to='/personal-info'>
              <button className="btn btn-primary">click to get started</button>
            </Link>

        </div>
    );
}

export default Home;