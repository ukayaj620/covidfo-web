import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Home from './pages/Home';
import News from './pages/News';
import Education from './pages/Education';
import SpreadMap from './pages/SpreadMap';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet titleTemplate="Covidfo | %s" defaultTitle="Covidfo">
        <meta name="description" content="Covidfo is COVID-19 Information Tracker Application" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edu" component={Education} />
          <Route path="/map" component={SpreadMap} />
          <Route path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;