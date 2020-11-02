import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';



function App() {
  return (
   
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/home">
          <Dashboard />
        </Route> 
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
    

  );
}

export default App;
