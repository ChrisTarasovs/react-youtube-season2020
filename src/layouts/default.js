import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import Sidebar from '../containers/sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from '../features/dashboard';
import User from '../features/user';
class DefaultLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Router>
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <br />
                    <Link to={'/profile'}>Profile</Link>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/profile" exact component={User} />
                </Router>
                <Sidebar />
                <Footer/>
            </div>
        )
    }
}

export default DefaultLayout;