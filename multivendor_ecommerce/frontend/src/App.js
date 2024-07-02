import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  
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
    
  );
}

export default App;
