import {Link} from 'react-router-dom';

import logo from '../logo.svg';



function Register(props) {
    return (
        
        
        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-8 col-12 offset-2'>
                        <div className='card'>
                            
                            <h4 className='card-header'>Register</h4>
                            <div className='card-body'>
                            <form>
                            <div className="mb-3">
                                        <label for="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Usename</label>
                                        <input type="text" className="form-control" id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="pwd" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="pwd"/>
                                        
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

export default Register;