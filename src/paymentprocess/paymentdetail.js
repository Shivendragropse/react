import React from 'react';
import ReactDOM from 'react-dom';
import './paymentdetail.css';
class Paymentdetail extends React.Component{
	render()
	{
		return(
        <section className="col-main col-sm-8  wow bounceInUp animated payment-fluid">
          <div className="category-title">
               <h1>Payment Method</h1>

               <div className="paymentmode">
                 <ul>
                    <li>
                        <label className="radiocontainer">Online Payment
                          <input type="radio"  name="radio"/>
                          <span className="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label className="radiocontainer"><img src="./images/paypal.png" alt="paypal" />
                          <input type="radio"  name="radio"/>
                          <span className="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label className="radiocontainer">Card Payment
                          <input type="radio" checked="checked"  name="radio"/>
                          <span className="checkmark"></span>
                        </label>
                        <div className="cardform">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="from">Card Number</label>
                                  <input type="text" className="form-control" placeholder="********** 2154" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="from">Card Holder Name</label>
                                  <input type="text" className="form-control" placeholder="John Smith" />
                                </div>
                              </div>
                              <div className="col-sm-2">
                            <div className="form-group">
                                <label for="status">Exp Date</label>
                                      <select className="form-control" >
                                        <option>MM</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                </select>
                            </div>
                              </div>
                              <div className="col-sm-2">
                                <div className="form-group mm22">
                                      <select className="form-control" >
                                        <option>YY</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                     </select>
                                </div>
                              </div>
                              <div className="col-sm-2">
                                <div className="form-group">
                                  <label for="from">CVV</label>
                                  <input type="text" className="form-control" placeholder="***" />
                                </div>
                              </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <label className="radiocontainer">Cash On Delivery
                          <input type="radio"  name="radio"/>
                          <span className="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <div className="paybutton">
                            <div className="row">
                              <div className="col-sm-8">
                              <button type="submit" name="submit" className="btn btn-primary paynow" >Pay Now</button>
                              </div>
                              <div className="col-sm-4">
                              <div class="securemode"><p><i class="fa fa-lock" ></i> Secure Payment</p></div>
                              </div>
                            </div>
                        </div>
                    </li>
                 </ul>
               </div>
            </div>
        </section>


			)
	}
}

export default Paymentdetail;