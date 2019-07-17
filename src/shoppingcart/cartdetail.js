import React from 'react';
import ReactDOM from 'react-dom';
import './cartdetail.css';
class Cartdetail extends React.Component{
	render()
	{
		return(
        <section className="col-main col-sm-9  wow bounceInUp animated cartdetail-fluid">
          <div className="category-title">
               <h1>My Shopping Cart</h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className="category13"> My Cart</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="productcart-fluid">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td class="image"><a class="product-image" title="Sample Product" href="#"><img width="75" alt="Sample Product" src="./images/tshirt/1.png"/></a></td>
                              <td><h3 className="product-name">Pink Polo Coller T-Shirt</h3>
                              <h4>Seller: <span>John Smith</span></h4></td>
                              <td>
                                <div className="add-to-box pro-quantity">
                                    <div className="add-to-cart">
                                    <label for="qty">Qty:</label>
                                      <div className="pull-left">
                                        <div className="custom pull-left">
                                          <button onClick="" className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                          <input type="text" className="input-text qty" title="Qty" value="1" maxlength="12" id="qty" name="qty"/>
                                          <button onClick="" className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </td>
                                <td>
                                    <div className="form-group">
                                      <label for="size">Size</label>
                                      <select className="form-control" id="exampleFormControlSelect1">
                                        <option>M</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>XL</option>
                                      </select>
                                    </div>
                              </td>
                                <td>
                                    <div className="price">
                                      <label for="price">Price</label>
                                      <h4>$200</h4>
                                    </div>
                              </td>
                                <td>
                                    <div className="delete">
                                        <a href="#"> <i className="fa fa-close"></i></a>
                                    </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="image"><a class="product-image" title="Sample Product" href="#"><img width="75" alt="Sample Product" src="./images/tshirt/2.png"/></a></td>
                              <td><h3 className="product-name">Black round Neck</h3>
                              <h4>Seller: <span>Mayazen</span></h4></td>
                              <td>
                                <div className="add-to-box pro-quantity">
                                    <div className="add-to-cart">
                                    <label for="qty">Qty:</label>
                                      <div className="pull-left">
                                        <div className="custom pull-left">
                                          <button onClick="" className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                          <input type="text" className="input-text qty" title="Qty" value="1" maxlength="12" id="qty" name="qty"/>
                                          <button onClick="" className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </td>
                                <td>
                                    <div className="form-group">
                                      <label for="size">Size</label>
                                      <select className="form-control" id="exampleFormControlSelect1">
                                        <option>M</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>XL</option>
                                      </select>
                                    </div>
                              </td>
                                <td>
                                    <div className="price">
                                      <label for="price">Price</label>
                                      <h4>$350</h4>
                                    </div>
                              </td>
                                <td>
                                    <div className="delete">
                                        <a href="#"> <i className="fa fa-close"></i></a>
                                    </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                  </div>
                  <div className="continueshopping">
                    <div className="row">
                      <div className="col-sm-6">
                         <div className="leftpart">
                           <a href="#"><i class="fa fa-arrow-left"></i> Continue Shopping</a>
                         </div>
                      </div>
                      <div className="col-sm-6">
                         <div className="rightpart">
                           <h4><span>Subtotal: </span>$550</h4>
                         </div>
                      </div>
                    </div>
                  </div>
            </div>
        </section>


			)
	}
}

export default Cartdetail;