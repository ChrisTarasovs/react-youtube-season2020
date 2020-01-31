import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import Sidebar from '../containers/sidebar';

class DefaultLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>Body data</div> <Sidebar />
                <Footer/>
            </div>
        )
    }
}

export default DefaultLayout;