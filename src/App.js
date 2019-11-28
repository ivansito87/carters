import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/home-page.component';

const HatsPage = () => {
  return <div> YO!</div>;
};

function App() {
  return (
    <div>
      <h2>This is a roster page!</h2>
      <Switch>
        <Route exact path="/" component={HatsPage} />
        <Route path="/hi" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
