import {Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
     
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='categories' element={<Categories />}/>
        <Route path='category/:category_slug/:category_id' element={<CategoryProducts />}/>
      </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
