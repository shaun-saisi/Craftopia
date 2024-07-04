import {Link} from 'react-router-dom';

import logo from '../logo.svg';



function OrderSuccess() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 offset-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <p><i className='fa fa-check-circle text-success fa-2x'></i></p>
                            <h4 className='text-success'>Thank you for the order</h4>
                            <p className='mt-4'>
                                <Link to="/" className='btn btn-primary '>Home</Link>
                                <Link to="/dashboard"className='btn btn-secondary ms-2 '>Dashboard</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                

        </div>
               
             
    )
}

export default OrderSuccess;