import React from 'react';
import ReactDOM from 'react-dom';
import './sidebar.css';
class Sidebar extends React.Component{
	render()
	{
		return(
        <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
          <div className="block block-account">
            <div className="block-title">My Account</div>
            <div className="block-content">
              <ul>
                <li className="current"><a href="#">My Profile </a></li>
                <li><a href="#">My Order</a></li>
                <li><a href="#">Setting</a></li>
                <li><a>Sell With Us</a></li>
                <li><a>About Us</a></li>
                <li><a>Help & Support</a></li>
                <li><a>Privacy Ploicy</a></li>
                <li><a>Term & Condition</a></li>
              </ul>
            </div>
          </div>
        </aside>


			)
	}
}

export default Sidebar;