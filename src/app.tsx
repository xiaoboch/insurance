import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import PersonalInfo from './personal_info';
import InsurancePlans from './insurance-plans';
import InsuranceDetail from './insurance-detail';
import MyPage from './my_page';
import Header from './commons/header';
import Footer from './commons/footer';
import AboutUs from './about_us';
import './css/app.scss';
import rootReducer from './reducer';

const store = createStore(rootReducer);

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='app'>
                        <Header />
                        <div className="content">
                            <div className="section">
                                <Route exact path='/' component={Home}></Route>
                                <Route path='/personal-info' component={PersonalInfo}></Route>
                                <Route path='/insurances' component={InsurancePlans}></Route>
                                <Route path='/insurance-detail' component={InsuranceDetail}></Route>
                                <Route path='/my-page' component={MyPage}></Route>
                                <Route path='/about-us' component={AboutUs}></Route>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
