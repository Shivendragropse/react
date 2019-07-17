import React from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import Men from './submenu/men.js';
import Women from './submenu/women.js';
import Kids from './submenu/kids.js';
import Homeappliance from './submenu/homeappliance.js';
import Sportsbooks from './submenu/sportsbooks.js';
import Electronics from './submenu/electronics.js';
import Furnitures from './submenu/furnitures.js';
class Menu extends React.Component{
	render()
	{
		return(
  <nav>
    <div className="container">
      <div className="nav-inner">
        <ul id="nav" className="hidden-xs">
          <li className="level0 nav-5 level-top first"><a href="#"><span>Men</span> </a>
            <Men/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Women</span> </a>
            <Women/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Kids</span> </a>
           <Kids/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Home Appliances</span> </a>
            <Homeappliance/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Sports,Books</span> </a>
            <Sportsbooks/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Electronics</span> </a>
            <Electronics/>
          </li>
          <li className="level0 nav-5 level-top first"><a href="#"><span>Furnitures</span> </a>
            <Furnitures/>
          </li>
        </ul>
      </div>
    </div>
  </nav>


			)
	}
}

export default Menu;