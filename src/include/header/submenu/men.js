import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Men extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Clothing</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Casual Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ethnic Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Denims</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Shoes</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sport Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Canvas Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Leather Shoes</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Watches</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Digital</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Chronograph</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sports</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Casual</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Jackets</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Coats</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Leather Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Blazers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Sunglasses</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ray Ban</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Fasttrack</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Police</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Oakley</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Men;