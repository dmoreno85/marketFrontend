import React from 'react';
import './App.css';

import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './views/NotFound/NotFound';
import AllItems from './views/AllItems/AllItems';
import DetailsItem from './views/DetailsItem/DetailsItem';
import Login from './views/Login/Login'
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={AllItems}/>
        <Route path='/item/:id' exact component={DetailsItem}/>
        <Route path='/login/' exact component={Login}/>
        <Redirect path='/' exact to='/allItems/' />
        <Route component={NotFound}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
