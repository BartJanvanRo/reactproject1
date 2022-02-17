import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useStateValue } from "../StateProvider";


function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

    return <div className='header'>
        <Link to="/">
            <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG28.png' alt='logo' />
        </Link>


        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <div className="App">                <FaSearch id='searchIcon' />
            </div>
        </div>

        <Link to='/Login'>
            <div className="header_option">
                <span className='header_optionL1'>Hello Bart</span>
                <span className='header_optionL2'>Sign in</span>
            </div>
        </Link>

        <Link to='/'>
            <div className="header_option"  >
                <span className='header_optionL1'>Returns</span>
                <span className='header_optionL2'>& Orders</span>
            </div>
        </Link>

        <Link to='/'>
            <div className="header_option"  >
                <span className='header_optionL1'>Your</span>
                <span className='header_optionL2'>Prime</span>
            </div>
        </Link>

        <Link to='/'>
            <div className="header_option"  >
                <span className='header_optionL1'></span>
                <span className='header_optionL2'></span>
            </div>
        </Link>

        <Link to="/Checkout">
            <div className="haeder_optionBasket">
                <FaShoppingBasket id='ShoppingCartIcon' />
                <span className='header_optionL2 header_basketCount'>
                    {basket?.length}
                </span>
            </div>
        </Link>
    </div>

}

export default Header;
