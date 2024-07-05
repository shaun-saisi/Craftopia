import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import VendorSidebar from './VendorSidebar';


function VendorProducts() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <VendorSidebar />
                     </div>
                    <div className='col-md-8 col-12'>
                        <Link to='/vendor-add-product' className='btn btn-primary mb-3 ms-auto'><i className='fa fa-plus-circle'></i> Add Product</Link>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Product Title</td>
                                        <td>500</td>
                                        <td>
                                            <a href='#' className='btn btn-info'>View</a>
                                            <a href='#' className='btn btn-primary ms-2'>Edit</a>
                                            <a href='#' className='btn btn-danger ms-2'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>      
                                
                    </div>

            </div>
       </div>        
    )
}

export default VendorProducts;