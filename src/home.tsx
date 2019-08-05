import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='page-title'>Welcome to the best insurance service in the world!</div>

            <div className="page-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>

            <Link to='/personal-info'>
              <button className="btn btn-primary get-start-btn">click to get started</button>
            </Link>

        </div>
    );
}

export default Home;