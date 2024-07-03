import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
function ProductDetail(){
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={logo} className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <p> This field will contain the product description in detsil
                        eb=verything will b covered Headerincludeing thr materials used
                        in the making of thre product
                    </p>
                    <h5 className='card-title text-muted'>Price: Ksh.50</h5>
                    <p className='mt-3'>
                    <button title="Add to Cart" className="btn btn-primary "><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    <button title="Buy Now" className="btn btn-warning ms-2"><i className="fa-solid fa-credit-card"></i> Buy Now</button>
                    <button title="Add to WishList" className="btn  btn-danger ms-2"><i className="fa-solid fa-heart"></i> Add to Wishlist</button>
                    <Link title="view Demo" target="_blank" className="btn btn-dark ms-2"><i className="fa-solid fa-cart-plus"></i> Demo</Link>
                    </p>

          

                    <div className='producttags mt-4'>
                    <h5 className=' text-warning'>Tags</h5>
                    <p >
                        <Link to='#' className='badge me-1 text-secondary'>Clothes</Link>
                        <Link to='#' className='badge me-1 text-secondary'>Wigs</Link>
                        <Link to='#' className='badge me-1 text-secondary'>FootWear</Link>
                        <Link to='#' className='badge me-1 text-secondary'>Bags</Link>
                        <Link to='#' className='badge me-1 text-secondary'>Art</Link>
                    </p>
                    </div>
                </div>
              
            </div>

            {/* Related products */}

            <h3 className='mt-5 mb-3'>Related Products</h3>
            <div id="relatedProductsSlider" class="carouselcarousel-dark slide " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row mb-5'>
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='row mb-5'>
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='row mb-5'>
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                            <SingleProduct title="Tshirts" />
                        </div>
                    </div>
                </div>
                <button className="relatedProductsSlider" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="relatedProductsSlider" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            {/* End related products */}
        </section>
    )
}

export default ProductDetail;