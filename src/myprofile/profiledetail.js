import React from 'react';
import ReactDOM from 'react-dom';
import './profiledetail.css';
class Profiledetail extends React.Component{
	render()
	{
		return(
        <section className="col-main col-sm-9  wow bounceInUp animated profile-fluid">
          <div className="category-title">
               <h1>My Profile<span className="editprofile"><a href="#">Edit Profile</a></span></h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className=""> <a href="#" title="Go to Home Page">My Account</a><span>/</span></li>
            			          <li className="category13"> My Profile</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="profileform">
                    <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">First Name</label>
                              <input type="text" className="form-control" placeholder="Akram" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Last Name</label>
                              <input type="text" className="form-control" placeholder="Khan" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Email Id</label>
                              <input type="text" className="form-control" placeholder="akram@gmail.com" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Mobile No</label>
                              <input type="text" className="form-control" placeholder="+971 32554 21452" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="to">Date of Birth</label>
                              <input type="date" className="form-control" id="dateofbirth" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                                <label for="status">Gender</label>
                                      <select className="form-control" disabled >
                                        <option>Male</option>
                                        <option>Female</option>
                                     </select>
                            </div>
                          </div>
                        </div>
                    </form>

                  </div>

          </div>
          <div className="category-title">
               <h1>Address Informtion</h1>
                  <div className="profileform">
                    <form>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="from">Street Address</label>
                              <input type="text" className="form-control" placeholder="101 HMK Road" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">City</label>
                              <input type="text" className="form-control" placeholder="Dubai" disabled  />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">State</label>
                              <input type="text" className="form-control" placeholder="Dubai" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Zip Code</label>
                              <input type="text" className="form-control" placeholder="321014" disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                                <label for="status">Country</label>
                                      <select className="form-control" disabled >
                                        <option>1</option>
                                        <option>2</option>
                                     </select>
                            </div>
                          </div>
                        </div>
                    </form>

                  </div>

          </div>
        </section>


			)
	}
}

export default Profiledetail;