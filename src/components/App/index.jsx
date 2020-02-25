import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { GlobalStyles } from 'ui';
import Theme from '../Theme';

// Layouts
import { HomeLayout } from 'layouts';

// Pages
import { Home } from 'pages';


export default () => (
  <Router>
    <Theme>
      <GlobalStyles />

      <Switch>

        <HomeLayout>
          <Route exact path="/">
            <Home />
          </Route>
        </HomeLayout>

      </Switch>

    </Theme>
  </Router>
);
