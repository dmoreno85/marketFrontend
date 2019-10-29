import React from 'react'
import {NavLink} from 'react-router-dom'

function header(){
return (
    <header className='header'>
      <h1>Market</h1>
      <NavLink to="/">home</NavLink>
      <NavLink to="/login">login</NavLink>
    </header>
  );}

  export default header;