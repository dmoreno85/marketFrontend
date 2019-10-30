import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';

import NotFound from './views/NotFound/NotFound';
import AllItems from './views/AllItems/AllItems';
import DetailsItem from './views/DetailsItem/DetailsItem';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={AllItems}/>
        <Route path='/item/:id' exact component={DetailsItem}/>
        <Route path='/login/' exact component={Login}/>
        <Route path="/register/" exact component={Register} />
        <Redirect path='/' exact to='/allItems/' />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

