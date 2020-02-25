import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { GlobalStyles } from 'ui';


export default () => (
  <Router>

    <GlobalStyles />

    <div>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cases">Trabalhos</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cases">
          <Cases />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Cases() {
  return <h2>Cases</h2>;
}
