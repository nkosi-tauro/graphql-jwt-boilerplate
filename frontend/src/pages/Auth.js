import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './App.css';

// Pages
import AuthPage from './pages/Auth'
import MainNavigation from './components/Navigation/MainNavigation'

function App() {
  return (
    <BrowserRouter>
    <MainNavigation/>
    <main className="main-content">
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
      </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
