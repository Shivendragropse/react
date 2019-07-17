import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as  Router, Route} from 'react-router-dom';
import Home from './home.js';
import Productlist from './productlist.js';
import Productdetail from './productdetail.js';
import Myorders from './myorders.js';
import Myprofile from './myprofile.js';
import Shoppingcart from './shoppingcart.js';
import Deliveryaddress from './deliveryaddress.js';
import Paymentprocess from './paymentprocess.js';
import Forgotpassword from './forgotpassword.js';

class Apps extends React.Component
          {
	        render()
	              {
		             return(
					     <Router>
					           <Route exact path = "/"component = {Home} />
					           <Route  path = "/Productlist"component = {Productlist} />
					           <Route  path = "/Productdetail"component = {Productdetail} />
					           <Route  path = "/Myorders"component = {Myorders} />
					           <Route  path = "/Myprofile"component = {Myprofile} />
					           <Route  path = "/Shoppingcart"component = {Shoppingcart} />
					           <Route  path = "/Deliveryaddress"component = {Deliveryaddress} />
					           <Route  path = "/Paymentprocess"component = {Paymentprocess} />
							   <Route  path = "/Forgotpassword" component = {Forgotpassword} />
					       </Router>

			);
	}
}
export default Apps;
