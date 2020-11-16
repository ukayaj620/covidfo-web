import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Helmet titleTemplate="Covidfo | %s" defaultTitle="Covidfo">
        <meta name="description" content="Covidfo is COVID-19 Information Tracker Application" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;