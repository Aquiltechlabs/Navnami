import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//IMPORT COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
//IMPORT PAGES
import NotFound from "./pages/NotFound";
import Homepage from './pages/Hompage'

const Routes = () => {
  return (
    <Router basename= "navnaami_react">
      <Header />
        <Switch>
        <Route exact path="/" component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;