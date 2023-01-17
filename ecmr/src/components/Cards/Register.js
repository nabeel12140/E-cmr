import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h bg-dark'>
    <div class="container d-flex justify-content-center">
  <form class="form-group col-md-6">
    <h2 class="text-center nav_text">Registration Form</h2>
    <div class="form-group">
      <label className='mt-2 nav_text' for="name">Name:</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="form-group">
      <label className='mt-2 nav_text' for="email">Email:</label>
      <input type="email" class="form-control" id="email"/>
    </div>
    <div class="form-group">
      <label className='mt-2 nav_text' for="password">Password:</label>
      <input type="password" class="form-control" id="password"/>
    </div>
    <div class="form-group">
      <label className='mt-2 nav_text' for="password-confirm">Confirm Password:</label>
      <input type="password" class="form-control" id="password-confirm"/>
    </div>
    <div class="form-group mt-2">
      <button type="submit" class="btn btn-primary btn-block">Submit</button><br></br>
      <p className='text-white'>Already have an Account..?<Link to="/signin"><a href='#' className='nav_text' >login</a></Link></p>
    </div>
  </form>
</div>
</div>
  )
}

export default Register