import {Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import AllProducts from './components/AllProducts';
import CategoryProducts from './components/CategoryProducts';
import Checkout from './components/Checkout';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
     
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/products' element={<AllProducts />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />}/>
        <Route path='/checkout' element={<Checkout />}/>
       
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
