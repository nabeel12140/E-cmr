import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Rating from '../Screen/Rating.js'

const Header = () => {
  
  const [products, setProducts] = useState([]);    
  const[user,setusers]=useState([]);
  const [isloading,setloading]=useState(true);
    
    
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/product');
      const git= await axios.get('https://api.github.com/users')
      setloading(false);
      setusers(git.data)
      setProducts(result.data);
    };
    fetchData();
  }, []);
  if(isloading)
  {
      return<>
      <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
          </>
  }
  return (
    <main id='Home'>
    <div className='Header__main'>
        <div className='Search'>
        <i className="fa-solid fa-bars nav_text font-size float-left"></i>
        <div class="dropdown float-left margin-left">
        
            <button class="btn btn-dark dropdown-toggle nav_text" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-globe"></i> Category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <div class="input-group mb-3 float-left margin-left">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
          <a href='#'><i class="fa-solid fa-magnifying-glass nav_text font-size"></i></a>
          </div>
        </div>
        <div class="dropdown float-left margin-left">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-flag nav_text"></i> English
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <div className='social_icons float-left'>
        <a><i class="fa-brands fa-facebook nav_text"></i></a>
        <a><i class="fa-brands fa-twitter nav_text"></i></a>
        <a><i class="fa-brands fa-facebook-messenger nav_text"></i></a>

        </div>
        <h1 className='text-center float-left'>Get Start<br/> Your Favourite Shopping</h1>
        </div>
        <button className='buy-now text-center float-left btn btn-dark'>Buy Now</button>      
    </div>
    <hr className='text-white'></hr>

    
    <div className='container' id='n'>
        <h2 className='text-center nav_text'>Man On Internet</h2>
        <div className='content__text-container mt-5'>
    <div class="container">
    <div class="row ">
    {
          products.map((product)=>
            {
                return(
            
    <div class=" col-10 col-md-4  mt-5  btn-light" key={product.slug}>
    <div class="card">
      <Link to={`/product/${product.slug}`}>
  <img src={product.image} class="card-img-top" alt="..."/></Link>
  <div class="card-body">
  <Link to={`/product/${product.slug}`}>
    <h5 class="card-title">{product.name}</h5>
    </Link>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Rating rating={product.rating} numReviews={product.numReviews}/>
    <a href="#" class="tex btn-primary">${product.price}</a>
    <button class="btn btn-primary float-left">Add to card</button> 
  </div>
</div>
    </div>
    
    )
})
}
     </div>
  </div>
    </div>
    <h2 className='text-center nav_text'>Github-Users</h2>
    <div className='content__text-container mt-5'>
    <div class="container">
    <div class="row ">
    {
          user.map((val)=>
            {
              if(val.id<=4)
                return(
            
    <div class=" col-10 col-md-4  mt-5  btn-light" key={val.login}>
    <div class="card">
      <Link to={`/git/${val.login}`}>
  <img src={val.avatar_url} class="card-img-top" alt="..."/></Link>
  <div class="card-body">
  <Link to={`/product/${val.login}`}>
    <h5 class="card-title">{val.id}</h5>
    </Link>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="tex btn-primary">{val.login}</a>
    <button class="btn btn-primary float-left">See More</button> 
  </div>
</div>
    </div>
    
    )
})
}
     </div>
  </div>
    </div>
    </div>
    </main>
  )
}

export default Header