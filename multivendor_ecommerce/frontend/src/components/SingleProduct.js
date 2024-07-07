import {Link} from 'react-router-dom';

import logo from '../logo.svg';



function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <Link to="/product/python-timer/123">
                    <img src={logo} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <h5 className="card-title text-warning"><Link to="/product/python-timer/123">{props.product.title}</Link></h5>
                  <h5 className="card-title">Price: <span className="text-muted">{props.product.price}</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to WishList" className="btn btn-sm ms-2"><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </div>
    )
}

export default SingleProduct;