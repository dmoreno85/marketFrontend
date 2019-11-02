import React from 'react'
import {NavLink} from 'react-router-dom'
import Search from '../search/search';

function header(){
return (
    <header className='header'>
      <h1>Market</h1>
      <Search/>
      <NavLink to="/">home</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">register</NavLink>
    </header>
  );}

  export default header;