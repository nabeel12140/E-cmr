import logo from './logo.svg';
import './App.css';
import Header from './components/Main/Header';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Nav from './components/Main/Nav';
import ProductScreen from './components/Screen/ProductScreen';
import Githubuser from './components/Screen/Githubuser'
import { CartScreen } from './components/Cards/CartScreen';
import Login from './components/Cards/Login';
import Register from './components/Cards/Register';
import Contact from './components/Cards/Contact';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <>
     <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/product/:slug" element={<ProductScreen/>}/>
      <Route path="/git/:login" element={<Githubuser/>}/>
      <Route path="/CartScreen" element={<CartScreen/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
