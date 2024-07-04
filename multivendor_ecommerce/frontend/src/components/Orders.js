import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import Sidebar from './Sidebar';


function Orders() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                     </div>
                     <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                            <Link> <img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <Link>  <p>Belt</p></Link>
                                            </td>
                                            <td>KSh 100</td>
                                            <span className='text-success'><i className='fa fa-check-circle'></i>Processing</span>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                            <Link> <img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <Link>  <p>Trouser</p></Link>
                                            </td>
                                            <td>KSh 500</td>
                                            <span className='text-secondary'><i className='fa fa-spin fa-spinner'></i>Processing</span>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                            <Link> <img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <Link>  <p>Wig</p></Link>
                                            </td>
                                            <td>KSh 700</td>
                                            <span className='text-danger'><i className='fa fa-times-circle'></i>Cancelled</span>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                     </div>
                    
        </div>
               
    </div>
    )
}

export default Orders;