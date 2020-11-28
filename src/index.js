import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import './Student';
//import IndecisionApp from './IndecisionApp/IndecisionApp';
// import ShoppingCart from './ShoppingCart/ShoppingCart';
//import StudentApp from './StudentApp/StudentApp';
//import Register from './FormValidation/Register';

import Blog from './website/Blog';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './website/Home';
import About from './website/About';
import Contact from './website/Contact';
import Hoc from './website/Hoc';
import PageNotFound from './website/PageNotFound';

const Header = () => (
  <header>
    
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>&nbsp;
    <NavLink to="/About"  activeClassName="is-active">About</NavLink>&nbsp;
    <NavLink to="/Blog"  activeClassName="is-active">Blog</NavLink>&nbsp;
    <NavLink to="/Contact"  activeClassName="is-active">Contact</NavLink>&nbsp;
    <NavLink to="/HOC"  activeClassName="is-active">Hoc</NavLink> 

  </header>
)

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} /> 
      <Route path="/About" component={About} /> 
      <Route path="/Blog" component={Blog} /> 
      <Route path="/Contact" component={Contact} />
      <Route path="/HOC" component={Hoc} />
      <Route component={PageNotFound} /> 
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  // <React.StrictMode> 
    /* <IndecisionApp/> */
    /* <ShoppingCart/> */
    /* <StudentApp/> */
    /* <Register/>
          </React.StrictMode>, */
          routes,
          
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
