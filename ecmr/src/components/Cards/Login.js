import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h bg-dark'>
    <div class="container d-flex justify-content-center align-items-center ">
  <form class="form-group">
    <h2 class="text-center mb-4 nav_text">Login</h2>
    <div class="form-group">
      <label className='mt-2 nav_text' for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <label className='mt-2 nav_text' for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password"/>
    </div>
    <div class="form-group form-check mt-2">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" className='nav_text' for="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button><br></br>
    <p className='text-white'>Don't have an Account..?<Link to="/Register"><a href='#' className='nav_text'>Create Account </a></Link></p>
  </form>
</div>
</div>
  )
}
export default Login