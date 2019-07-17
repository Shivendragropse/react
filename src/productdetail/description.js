import React from 'react';
import ReactDOM from 'react-dom';
import './description.css';
class Description extends React.Component{
	render()
	{
		return(
                <div className="product-shop col-lg-7 col-sm-7 col-xs-12">
                <div className="product-heading">
                  <div className="row">
                     <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="product-name">
                          <h1>Black Printed T-Shirt</h1>
                          <p>Addidas</p>
                        </div>
                        <div className="ratings">
                            <div className="rating-box">
                               <div className="rating"></div>
                            </div>
                        </div>
                      </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <div className="vendordetail">
                       <div className="details">
                          <h3>John Smith <span><i class="fa fa-star"></i> 4.5</span></h3>
                          <p><i class="fa fa-map-marker"></i> 101 W 8th Ave Spokne WA 987547</p>
                       </div>
                       <div className="vendorpic">
                         <img src="./images/vendor/1.jpg" alt="vendor photo" />
                       </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="price-block">
                    <div className="price-box">
                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $400 </span> </p>
                      <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $600 </span> </p>
                      
                    </div>
                  </div>
                  <div className="productsize">
                     <div className="titles">
                        <h3>Size :</h3>
                     </div>
                     <div className="sizes">
                     <ul>
                       <li><a href="#"> S </a></li>
                       <li className="active"><a href="#"> M </a></li>
                       <li><a href="#"> L </a></li>
                       <li><a href="#"> XL </a></li>
                     </ul>
                     </div>
                  </div>
                  <div className="short-description overview-product">
                    <h2>Quick Overview</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                  </div>
                  <div className="add-to-box pro-quantity">
                    <div className="add-to-cart">
                      <div className="pull-left">
                        <div className="custom pull-left">
                          <button onClick="" className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                          <input type="text" className="input-text qty" title="Qty" value="1" maxlength="12" id="qty" name="qty"/>
                          <button onClick="" className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                        </div>
                      </div>
                      <div className="email-addto-box adtocart">
                        <ul className="add-to-links">
                          <li> <a className="link-wishlist" href="#"><span>Add to Cart</span></a></li>
                          <li><span className="separator">|</span> <a className="link-compare" href="#"><span>Add to Wishlist</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    <div className="product-detail-fluid">
                      <h3>Product Detail</h3>
                      <div className="product-list">
                        <ul>
                        <li><span>color:</span>White</li>
                        <li><span>Type:</span>Round Neck</li>
                        <li><span>Combos:</span>Single</li>
                        <li><span>Fabric:</span>Ployester</li>
                        <li><span>SUPC:</span>SDLS25454556555</li>
                        </ul>
                      </div>
                    </div>
                </div>


			)
	}

}

export default Description;