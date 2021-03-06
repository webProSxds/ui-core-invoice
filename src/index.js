
import React from 'react';
import { render } from 'react-dom';
import './style.css';
import initFontAwesome from "./utils/initFontAwesome";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './home';
import About from './about';
import Users from './users';
initFontAwesome();

const Nav = () => {

  return (
    <nav className="navbar">
      <NavLink
        exact
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/">Home</NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/about">About</NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/users">Users</NavLink>
    </nav>
  )
}

const Header = () => {

  return (
    <header className="header">
      <h2>Scroll Down</h2>
      <p>Scroll down to see the sticky effect.</p>
    </header>)
}

const UiRoute = () => {

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

class App extends React.Component {

  componentDidMount() {

    window.onscroll = function () { myFunction() };

    var navbar = document.querySelector('nav');
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

  render() {

    return (
      <div>
        <UiRoute />
      </div >
    )
  }
}


render(<App />, document.getElementById('root'));
