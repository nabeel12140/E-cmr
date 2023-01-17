import React from 'react'
import { Store } from '../../Store';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const {state}=useContext(Store);
  const {cart}=state;
  return (
   
    <div className='nav_top '>
    <nav className="navbar navbar-expand-lg navbar-fixed-top mt-2" id='top'>
          <a className="brand nav_text" href="#">NabeelCh</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse bg-light" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item  active"> 
              <Link to="/"><a className=" nav_text"><i class="fa-solid fa-house-user nav_text "></i> Home</a></Link>
              </li>
              <li className="nav-item">
              <a class=" nav_text"><i class="fa-solid fa-house-user nav_text"></i> Add Product</a>
              </li>
              <li className="nav-item">
                <a className=" nav_text"><i class="fa-solid fa-pen-nib nav_text"></i> Experience</a>
              </li>
              <li className="nav-item">
                <Link to="/Contact"><a class=" nav_text" href="#contact"><i class="fa-regular fa-user nav_text"></i> Contact</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/signin"><a class=" nav_text" href="#link"><i class="fa-solid fa-link nav_text"></i>SignIN</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/CartScreen">{
                  cart.cartItems.length>=0 && (
                    <i className='btn btn-danger rounded-circle'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</i>
                  )
                }<span className='color-y'>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
      
      </nav>
      </div>
  )
}

export default Nav