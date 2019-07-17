import React from 'react';
import ReactDOM from 'react-dom';
import './productslider.css';
class Productslider extends React.Component{
	render()
	{
		return(
                <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                  <ul className="moreview" id="moreview">
                    <li className="moreview_thumb thumb_1"> <img className="moreview_thumb_image" src="./images/product/1.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/1.png" alt=""/>  <img  className="zoomImg" src="./images/product/1.png" alt="thumbnail"/></li>
                    <li className="moreview_thumb thumb_2 moreview_thumb_active"> <img className="moreview_thumb_image" src="./images/product/2.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/2.png" alt=""/>  <img  className="zoomImg" src="./images/product/2.png" alt="thumbnail"/></li>
                    <li className="moreview_thumb thumb_3"> <img className="moreview_thumb_image" src="./images/product/3.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/3.png" alt=""/>  <img  className="zoomImg" src="./images/product/3.png" alt="thumbnail"/></li>
                    <li className="moreview_thumb thumb_4"> <img className="moreview_thumb_image" src="./images/product/4.png" alt="thumbnail"/> <img className="moreview_source_image" src="./images/product/4.png" alt=""/>  <img  className="zoomImg" src="./images/product/4.png" alt="thumbnail"/></li>
                  </ul>
                  <div className="moreview-control"> <a href="javascript:void(0)" className="moreview-prev"></a> <a href="javascript:void(0)" className="moreview-next"></a> </div>
                </div>


			)
	}

}

export default Productslider;