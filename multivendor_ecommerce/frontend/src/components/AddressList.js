import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import Sidebar from './Sidebar';



function AddressList() {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='col-12'>
                                <Link to="/add-address" className='btn btn-outline-primary mb-4 float-end'><i className='fa fa-plus-circle'></i>Add Address</Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 mb-4' >
                                <div className='card  text-muted'>
                                    <div className='card-body'>
                                        
                                        <h6>
                                        <i className='fa fa-check-circle  text-success mb-2'></i><br/>
                                            123, Kifaru House, Juja, Kiambu, Kenya
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                            <button className='btn btn-outline-dark btn-sm mb-2'>Make default</button><br/>
                                            123, http House, Kahawa, Nairobi, Kenya
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                        <button className='btn btn-outline-dark btn-sm mb-2'>Make default</button><br/>
                                            123, Mehlet, Kigali, Rwanda
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
               
             
    )
}

export default AddressList;