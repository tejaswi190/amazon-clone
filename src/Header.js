import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Outlet, Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <>
    <div className='header'>
        <Link to="/"><img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'></img></Link>
        <div className='header_search'>
            <input className='header_search_input' type="text"></input>
            <SearchIcon className='header_searchicon'></SearchIcon>
            {/* logo */}
        </div>
        <div className='header_nav'>
            <Link to={!user &&"/loginpage"}><div className='header_option' onClick={handleAuthentication}>
                <span className='header_optionlineone'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header_optionlinetwo'>{user ? 'SignOut' : 'Sign In'}</span>
            </div></Link>
            <div className='header_option'>
                <span className='header_optionlineone'>Returns</span>
                <span className='header_optionlinetwo'>&Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionlineone'>Your</span>
                <span className='header_optionlinetwo'>prime</span>
            </div>
            <Link to="/checkoutpage"><div className='header_optionbasket'>
                <ShoppingBasketIcon></ShoppingBasketIcon>
                <span className='header_optionlinetwo header_basketcount'>{basket?.length}</span>
            </div></Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header