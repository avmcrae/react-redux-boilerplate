/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from "react-router";

import Page from './components/page/page';
import HelloWorld from './components/helloWorld/helloWorld';
import MeaningOfLife from './components/meaningOfLife/meaningOfLife';
import NotFound from './components/notFound/notFound';

require('./application.scss');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRedirect to="/hello-world" />
      <Route path="hello-world" components={{content: HelloWorld}}></Route>
      <Route path="meaning-of-life" components={{content: MeaningOfLife}}></Route>
      <Route path="*" components={{content: NotFound}}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
