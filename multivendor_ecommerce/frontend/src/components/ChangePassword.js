import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Sidebar from './Sidebar';

function ChangePassword(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Change Password</h4>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="newPwd" className="form-label">New password</label>
                                    <input type="password" className="form-control" id="newPwd" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPwd" className="form-label">Confirm password</label>
                                    <input type="password" className="form-control" id="confirmPwd" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
