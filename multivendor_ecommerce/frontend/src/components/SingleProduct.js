import logo from '../logo.svg';

function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-warning">{props.title}</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Ksh. 500</span></h5>
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