import {Link} from 'react-router-dom';

import logo from '../logo.svg';



function Checkout(props) {
    return (
        
        
            <div className='container mt-4'>
                <h3 className='mb-4'>All Items (4)</h3>
                <div className='row'>
                    <div className='col-md-8 col-12'>
                    </div>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
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
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                   <Link> <img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                   <Link>  <p>Trouser</p></Link>
                                </td>
                                <td>KSh 500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                   <Link> <img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                   <Link>  <p>Wig</p></Link>
                                </td>
                                <td>KSh 700</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                 <th></th>
                                <th>Total</th>
                                <th>Ksh 1800</th>
                            </tr>
                            <tr>
                              
                                    <td colSpan='3' align='center'>
                                        <Link to='/categories' className='btn btn-secondary'>Continue Shopping</Link>
                                        <Link className='btn btn-success ms-2'>Proceed to payment</Link>
                                    </td>
                              
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
               
             
    )
}

export default Checkout;