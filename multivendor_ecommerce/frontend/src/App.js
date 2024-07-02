import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container">
          <a className="navbar-brand" href="#">Craftopia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="mt-4">
        <div className="container">
          <h3 className="mb-4">Latest Products <a href="#" className='float-end btn btn-sm btn-warning mt-2'>View all products</a></h3>
          <div className="row">
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
        </div>
      </main>
    </>
  );
}

export default App;
