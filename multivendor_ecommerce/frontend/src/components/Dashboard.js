import {Link} from 'react-router-dom';

import logo from '../logo.svg';
import Sidebar from './Sidebar';


function Dashboard(props) {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                     </div>
                    <div className='col-md-8 col-12'>
                        <div className='row'>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>Total Orders</h4>
                                        <h4><a href='#'>123</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>In Wishlist</h4>
                                        <h4><a href='#'>123</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-center'>
                                        <h4>addresses</h4>
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

export default Dashboard;