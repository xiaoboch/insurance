import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='page-title'>Welcome to the best insurance service in the world!</div>

            <div className="page-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae maximus eros, ac rhoncus ante. Aliquam mi neque, accumsan tristique felis sed, pharetra mollis tortor. Sed efficitur eget lorem in hendrerit. Integer a arcu nec nunc finibus dictum. Nullam nunc turpis, consectetur consequat mattis vel, suscipit vitae urna. Vivamus vehicula tortor eu est eleifend molestie. Nam gravida elit ut dolor porta imperdiet. Praesent vulputate lacus lacus, quis feugiat nibh sollicitudin vel.
            </div>

            <Link to='/user'>
              <button data-cy='try-out' className="btn btn-primary get-start-btn">30-Days free!</button>
            </Link>

        </div>
    );
}

export default Home;