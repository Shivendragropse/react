import React from 'react';
import { Link } from 'react-router-dom'
import './search.css';
class Search extends React.Component{
	render()
	{
		return(
  <header className="header-container">
    <div className="header-top">
      <div className="container">
        <div className="row"> 
          <div className="col-xs-6">           
            <div className="welcome-msg hidden-xs"> Welcome To  salam trades! </div>
          </div>
          <div className="col-xs-6"> 
            <div className="toplinks">
              <div className="links">
                <div className="wishlist"><a title="My Wishlist"  href="#"><span className="hidden-xs">Wishlist</span></a></div>
                <div className="myaccount"><a title="My Account" href="#signuplogin" data-toggle="modal"><span className="hidden-xs">My Account</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header header-serach">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-3 col-md-2"> 
          <a className="logo" title="Souqalasal" href="/"><img alt="Souqalasal Logo" src="./images/logo/logo.png" /></a> 
        </div>
        <div className="col-lg-8 col-sm-6 col-md-8"> 
          <div className="search-box">
            <form>
              <select name="category_id" className="cate-dropdown hidden-xs">
                <option value="0">All Categories</option>
                <option value="36">Honey</option>
                <option value="37">Honey Products</option>
                <option value="38">Bee Products</option>
                <option value="39">Sweets and Desserts</option>
                <option value="40">Food Supplement</option>
                <option value="41">Neutraceutical</option>
                <option value="41">Halal Food</option>
              </select>
              <input type="text" placeholder="Search Products & Seller.." value="" maxlength="70" className="" name="search" id="search"/>
              <button id="submit-button" className="search-btn-bg"><span><i class="fa fa-search"></i></span></button>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 col-md-2">
          <div className="top-cart-contain">
            <div className="mini-cart">
              <div   className="basket "> <Link to = "/Shoppingcart"> <i class="fa fa-shopping-bag"></i>
                <div className="cart-box"><span className="title">My Cart</span></div>
                </Link></div>
              <div>
            </div>
            </div>
            <div id="ajaxconfig_info"> <a href="#"></a>
              <input value="" type="hidden"/>
              <input id="enable_module" value="1" type="hidden"/>
              <input className="effect_to_cart" value="1" type="hidden"/>
              <input className="title_shopping_cart" value="Go to shopping cart" type="hidden"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </header>
			)

	}
}

export default Search;