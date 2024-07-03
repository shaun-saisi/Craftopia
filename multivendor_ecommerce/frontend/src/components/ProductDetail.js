import {Link} from 'react-router-dom';
import logo from '../logo.svg';
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
        </section>
    )
}

export default ProductDetail;