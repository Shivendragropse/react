import React from 'react';
import { Link } from 'react-router-dom'
import './categories.css';
class Categories extends React.Component{
	render()
	{
		return(
  <section className="main-container col1-layout home-content-container categories-fluid">
    <div className="container">
      <div className="std">
        <div className="best-seller-pro wow bounceInUp animated">
          <div className="slider-items-products">
            <div className="new_title center">
              <h2>Categories</h2>
            </div>
            <div id="best-seller-slider" className="product-flexslider hidden-buttons">
              <div className="slider-items slider-width-col4"> 
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/1.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link  title=" Sample Product" to="/Productlist">Women's Fashion </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/2.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist"> Men's Fashion </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/3.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist"> Kid's Fashion </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/4.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist">Home Appliances </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/5.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist"> Electronics </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/6.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist"> Sports & Books </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/categories/7.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <Link title=" Sample Product" to="/Productlist"> Furnitures </Link> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

			)
	}
}

export default Categories;