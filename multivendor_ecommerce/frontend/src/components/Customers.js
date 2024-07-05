import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import VendorSidebar from './VendorSidebar';


function Customers() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <VendorSidebar />
                     </div>
                     <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                Samuel Atandi
                                            </td>
                                            <td>samuelattta@gmail.com</td>
                                            <td>
                                               07468689874
                                            </td>
                                            <td>
                                                <button className='btn btn-danger btn-sm'> Remove</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>
                                                Michael Okinyi
                                            </td>
                                            <td>mikeokiii@gmail.com</td>
                                            <td>
                                               07468689874
                                            </td>
                                            <td>
                                                <button className='btn btn-danger btn-sm'> Remove</button>
                                            </td>
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

export default Customers;