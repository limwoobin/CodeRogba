import React, { Component } from 'react';
 import PhoneForm from './components/PhoneForm';
 import PhoneInfoList from './components/PhoneInfoList';
import Contact from './contact/Contact';


class App extends Component {
  
  render(){
    return(
       <Contact />
      //<PhoneInfoList />
    );
  }
}


export default App;
