import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/services" component={Services}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Redirect to="/" />
    </Switch>
     <Footer />
    </>
  );
}

export default App;
