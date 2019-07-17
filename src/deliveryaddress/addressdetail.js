import React from 'react';
import ReactDOM from 'react-dom';
import './addressdetail.css';
class Addressdetail extends React.Component{
	render()
	{
		return(
        <section className="col-main col-sm-8  wow bounceInUp animated addressdeail-fluid">
          <div className="category-title">
               <h1>Delivery Address</h1>
            </div>
            <div className="showaddress">
              <div className="row">
              <div className="col-sm-6">
                 <h4>Saved Address</h4>
                <div className="addresss">
                 <h2>John Smith</h2>
                 <p>Better Technology Labs</p>
                 <p>23 North, Main Street, Windsor 151201</p>
                 <p>Phone: <span>+173 2547 2154</span></p>
                 <div className="deleteaddress"><i className="fa fa-close"></i></div>
                 <div className="rightsign"><i className="fa fa-check"></i></div>
                </div>
              </div>
              </div>
            </div>
            <div className="newaddress">
              <div className="category-title">
                 <h1>New Address</h1>
              </div>
              <div className="adaddress">
                  <form>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile No" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Pincode" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Locality" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <textarea   className="form-control" placeholder="Address" ></textarea>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="City/District" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="State" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Landmark (Optional)" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Alternate Number (Optional)" />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <button type="submit" name="submit" className="btn btn-primary saveforfuture" >Save for future</button>
                            </div>
                            <div className="col-sm-4">
                              <button type="submit" name="submit" className="btn btn-primary deliver" >Deliver</button>
                            </div>
                            <div className="col-sm-4">
                              <button type="submit" name="submit" className="btn btn-primary cancell" >Cancel</button>
                            </div>
                          </div>
                      </form>
              </div>
            </div>
        </section>


			)
	}
}

export default Addressdetail;