import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import Rating from "./Rating";
import { Store } from "../../Store";
function ProductScreen(){
    const navigate=useNavigate();
    const params =useParams();
    const{slug}=params;
    const [product, setProduct] = useState([]);
    const [abc,abcw]=useState([]);
    let a=0;
    const [isloading,setloading]=useState(true);
        useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(`/api/product/slug/${slug}`);
        const nn=await axios.get(`/api/product`);
        setloading(false);
        abcw(nn.data)
        setProduct(result.data);  
        };
        fetchData();
        }, [slug]);
        const { state, dispatch} = useContext(Store);
        const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity},
    });
    navigate("/CartScreen");
  };
  
        if(isloading)
  {
      return<>
      <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
          </>
  }
 
    return(
        <>
        
        <div><h1 className="text-center">Mans On Internet</h1></div>
        <div className="product-details">
            
            <div class=" col">
                <img src={product.image} alt="..."/> 
            </div>
            <div className="col">
                <div className="details-col ">
                    <div className="stock">
                        <ul>
                            <li>Price$:    <small className="space">${product.price}</small></li>
                            <li>Status:
                            {product.countInStock>0?(
                            <i className="space btn btn-success">In Stock {product.countInStock}</i>
                        ):(
                        <a className="space btn btn-danger">Unavailable</a>
                        )}</li>
                        <li>{product.countInStock >0 &&(
                            <div className="d-grid">
                                <button className="btn btn-primary"onClick={(addToCartHandler)}>Add To Cart</button>
                            </div>
                        )}</li>
                        </ul>
                    </div>
                <h1>{product.name}</h1>
                    <ul>
                        <li><Rating rating={product.rating} numReviews={product.numReviews}/></li>
                        <hr></hr>
                        <li>Price: ${product.price}</li>
                        <hr></hr>
                        <li>Description:
                        <p>{product.description}</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="dt_Product ">
            <div className='content__text-container mt-5'>
    <div class="container ">
    <div class="row ">
    {
          abc.map((val)=>
            {
                if(product.name!=val.name)
                return(
    <div class=" col-10 col-md-4  mt-5  btn-light" key={val.slug}>
    <div class="card">
  <img src={val.image} class="card-img-top" alt="..."  href={`/product/${val.slug}`}/>
  <div class="card-body">
  <Link to={`/product/${val.slug}`}>
    <h5 class="card-title">{val.name}</h5></Link>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Rating rating={val.rating} numReviews={val.numReviews}/>
    <a href="#" class="tex btn-primary">${val.price}</a>
    <Link to={`/product/${val.slug}`}>
    <button class="btn btn-primary float-left">Show details</button> </Link>
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
        </>
    );
}
export default ProductScreen;