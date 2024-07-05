import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import VendorSidebar from './VendorSidebar';


function VendorDashboard() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <VendorSidebar />
                     </div>
                    <div className='col-md-8 col-12'>
                        <div className='row'>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>Total Products</h4>
                                        <h4><a href='#'>123</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>Total Customers</h4>
                                        <h4><a href='#'>123</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>Total Orders</h4>
                                        <h4><a href='#'>5</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
            </div>

        </div>
               
    </div>
    )
}

export default VendorDashboard;