import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import VendorSidebar from './VendorSidebar';


function Reports() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <VendorSidebar />
                     </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>Monthly Reports</h4>
                                        <h4><a href='#' className='btn btn-info btn-sm text-white'>View</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
        </div>
               
    </div>
    )
}

export default Reports;