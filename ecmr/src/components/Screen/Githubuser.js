import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import Rating from "./Rating";
function Githubuser(){
    const params =useParams();
    const{login}=params;
    const [user, setuser] = useState([]);
    const [isloading,setloading]=useState(true);
    const [abc,abcw]=useState([]);
        useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(`https://api.github.com/users/${login}`);
        const nn=await axios.get(`https://api.github.com/users`);
        setloading(false);
        setuser(result.data);
        abcw(nn.data)
        };
        fetchData();
        },[login]);
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
        <div><h1 id="top" className="text-center">Mans On Github</h1></div>
        <div className="product-details">
            <div class=" col">
                <img src={user.avatar_url} alt="..."/> 
            </div>
            <div className="col">
                <div className="details-col ">
                    <div className="stock">
                        <ul>
                            <li>Git Id:    <small className="space">{user.id}</small></li>
                            <li>online :
                            {user.id>0?(
                            <a className="space btn btn-success">Online</a>
                        ):(
                        <a className="space btn btn-danger">Unavailable</a>
                        )}</li>
                        <li>{user.id >=3 &&(
                            <div className="d-grid">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        )}</li>
                        </ul>
                    </div>
                <h1>{user.name}</h1>
                    <ul>
                        <li><Rating rating={user.rating} numReviews={user.numReviews}/></li>
                        <hr></hr>
                        <li>Git Folowers: {user.type}</li>
                        <hr></hr>
                        <li>Description:
                        <p><a href="#">{user.repos_url}</a></p>
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
                if(user.id!=val.id)
                return(
                    <div class=" col-10 col-md-4  mt-5  btn-light" key={val.login}>
                    <div class="card">
                      <Link to={`/git/${val.login}`}>
                  <img src={val.avatar_url} class="card-img-top" alt="..." href="#top"/></Link>
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
        </>
    );
}
export default Githubuser;