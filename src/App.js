import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component'
import './App.css';

import HomePage from './pages/homepage/home-page.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        {/*
            Prop Tuneling we have access to hystory and match here
            since is pased from the route compnent
        */}
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
