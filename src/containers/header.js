import React, { Component } from 'react';
import Navigation from '../components/navigation';

class Header extends Component{
    menuList  = [
        'Home', 'About me', 'Contact me'
    ]
    render(){
        return(
            <div>
                <Navigation menu={this.menuList}/>
            </div>
        )
    }
}

export default Header;