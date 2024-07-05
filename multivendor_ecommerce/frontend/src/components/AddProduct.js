import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import VendorSidebar from './VendorSidebar';

function AddProduct(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                        <div className='card-body'>
                            <form>
                            <div className="mb-3">
                                    <label htmlFor="Title" className="form-label">Category</label>
                                    <select className='form-control'>
                                        <option>Clothes</option>
                                        <option>Footwear</option>
                                        <option>Wigs</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="Title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="Price" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Description</label>
                                    <textarea className="form-control" id="username" rows="8"></textarea>
                                </div>
                              
                                <div className="mb-3">
                                    <label htmlFor="productImg" className="form-label">Product Image</label>
                                    <input type="file" className="form-control" id="productImg" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
