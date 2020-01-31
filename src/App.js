import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultLayout from './layouts/default';
class App extends Component {
  
  render (){
    return (
      <div className="App">
        <DefaultLayout />
      </div>
    );
  }
}

export default App;
