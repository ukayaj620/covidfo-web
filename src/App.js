import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Home from './pages/Home';
import Education from './pages/Education';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet titleTemplate="Covidfo | %s" defaultTitle="Covidfo">
        <meta name="description" content="Covidfo is COVID-19 Information Tracker Application" />
      </Helmet>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edu" component={Education} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;