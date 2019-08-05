import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import PersonalInfo from './personal_info';
import Insurances from './insurances';
import InsuranceDetail from './insurances-detail';
import MyPage from './my_page';

class App extends React.PureComponent {
    render() {
        return (
            <Router>
               <Route exact path='/' component={Home}></Route>
               <Route path='/personal-info' component={PersonalInfo}></Route>
               <Route path='/insurances' component={Insurances}></Route>
               <Route path='/insurance-detail' component={InsuranceDetail}></Route>
               <Route path='/my-page' component={MyPage}></Route>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);
