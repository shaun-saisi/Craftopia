import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="list-group">
                           
                            <Link to="/dashboard" className="list-group-item list-group-item-action active">Dashboard</Link>
                            <Link to="/orders" className="list-group-item list-group-item-action">Orders</Link>
                            <Link to="/profile" className="list-group-item list-group-item-action">Profile</Link>
                            <Link to="/wishlist" className="list-group-item list-group-item-action">WishList</Link>
                            <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/addresses" className="list-group-item list-group-item-action">Addresses</Link>
                            <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>
    )
}

export default Sidebar;
