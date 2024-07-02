import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

function App() {
  return (
    <>
     
      <Header />
      <main className="mt-4">
        <div className="container">
          {/* Latest Products*/}
          <h3 className="mb-4">Latest Products <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all products
            <i class="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>


          </div>
           {/* Latest Products end */}

            {/* Popular categories */}
          <h3 className="mb-4">Popular Categories <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all categories
            <i class="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Category title</h4>
                 
                </div>
                <div className='card-footer'>
                  Purchases: 233
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Category title</h4>
                 
                </div>
                <div className='card-footer'>
                  Purchases: 233
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Category title</h4>
                 
                </div>
                <div className='card-footer'>
                  Purchases: 233
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Category title</h4>

                </div>
                <div className='card-footer'>
                  Purchases: 233
                </div>
                
              </div>
            </div>
            

            </div>
           {/* Popular categories end */}

           {/* Popular Products */}
           <h3 className="mb-4">Popular Products <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all products
            <i class="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Product title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>

           
          </div>

           {/* End Popular Products */}

            {/* Popular Sellers */}
          <h3 className="mb-4">Popular Sellers <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all Sellers
            <i class="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Seller Name</h4>
                 
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Furniture</a>, <a href="#">Art</a>
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Seller Name</h4>
                 
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Wigs</a>, <a href="#">Footwear</a>
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Seller Name</h4>
                 
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Clothes</a>, <a href="#">Necklaces</a>
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">Seller Name</h4>

                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Clothes</a>, <a href="#">Footwear</a>
                </div>
                
              </div>
            </div>
            

            </div>
           {/* Popular Sellers end */}

        </div>
      </main>
    </>
  );
}

export default App;
