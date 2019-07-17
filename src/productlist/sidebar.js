import React from 'react';
import ReactDOM from 'react-dom';
import './sidebar.css';
class Sidebar extends React.Component{
	render()
	{
		return(
 
        <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
          <div className="block block-layered-nav">
          <div className="pricebox">
              <h3>Price</h3>
              <label className="price-cart">$10 - $99 
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">$100 - $499
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">$500 - $999
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>
          <div className="pricebox">
              <h3>Brand</h3>
              <label className="price-cart">Puma 
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Addidas
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Nike
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Reebok
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>
          <div className="pricebox productsize">
              <h3>Size</h3>
              <label className="price-cart">M 
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">X
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">L
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">XL
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>
          <div className="pricebox productsize ratingbox">
              <h3>Rating</h3>
              <label className="price-cart">1+ 
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">2+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">3+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">4+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>
          </div> 
          <div className="block block-layered-nav">
          <div className="pricebox">
              <h3>Subcategory</h3>
                     <ul className="level1">
                        <li> <a href="#"> T-Shirts </a> </li>
                        <li> <a href="#"> Casual Shirts </a> </li>
                        <li> <a href="#"> Formal Shirts </a> </li>
                        <li> <a href="#"> Sweetshirts </a> </li>
                        <li> <a href="#"> Sweaters </a> </li>
                        <li> <a href="#"> Jackets </a> </li>
                        <li> <a href="#"> Sport Shoes </a> </li>
                        <li> <a href="#"> Sports Shandals </a> </li>
                        <li> <a href="#"> Wallets </a> </li>
                        <li> <a href="#"> Belts </a> </li>
                        <li> <a href="#"> Perfumes & Body Mists  </a> </li>
                      </ul>
          </div>
          </div>
        </aside>

			)
	}
}

export default Sidebar;