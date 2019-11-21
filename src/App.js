import React from 'react';
import './App.css';
import M from 'materialize-css'
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './views/NotFound/NotFound';
import AllItems from './views/AllItems/AllItems';
import DetailsItem from './views/DetailsItem/DetailsItem';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Congrats from './views/Congrats/Congrats';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Switch>
            <Route path='/' exact component={AllItems} />
            <Route path='/items/:id' exact component={DetailsItem} />
            <Route path='/login/:id' exact component={Login} />
            <Route path='/login/' exact component={Login} />
            <Route path="/register/" exact component={Register} />
            <Route path="/congrats/" exact component={Congrats} />
            <Redirect path='/' exact to='/allItems/' />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
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

