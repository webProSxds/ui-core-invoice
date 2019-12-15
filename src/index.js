
import React from 'react';
import { render } from 'react-dom';
import './style.css';
import initFontAwesome from "./utils/initFontAwesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';
import Users from './users';
initFontAwesome();



const Header = () => {

  return (<div>
    <div class="header">
      <h2>Scroll Down</h2>
      <p>Scroll down to see the sticky effect.</p>
    </div>

    <div id="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>)
}

const UiRoute = () => {

  return (
    <Router>
      <div>
        <Header />
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

    console.log("yes");
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
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
