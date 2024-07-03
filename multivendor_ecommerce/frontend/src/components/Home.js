import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from './SingleProduct';

function Home(){
    return (
        <main className="mt-4">
        <div className="container">
          {/* Latest Products*/}
          <h3 className="mb-4">Latest Products <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all products
            <i class="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />


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

           {/* Rating and Reviews */}
           <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p> A well known qote that I have written</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text warning'></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                <figure className="text-center">
                    <blockquote className="blockquote">
                      <p> A well known qote that I have written</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                <figure className="text-center">
                    <blockquote className="blockquote">
                      <p> A well known qote that I have written</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

           {/*End rating and reviews */}

           

        </div>
      </main>
    )
}
export default Home;