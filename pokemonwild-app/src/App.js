import React from 'react';
import './App.css';
import Router from './components/Router'
import Footer from './components/Footer/Footer'

class App extends React.Component {

  render() {
    return (
      <>
          <Router/>
          <Footer/>
      </>
    )
  }
}
export default App;
