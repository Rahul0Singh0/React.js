import React from "react";
import { CDN_URL } from "../utils/constants";

// all props passing over here and we destructuring it 
const RestaurantCard = (props) => {
    // const { resName, cuisins } = props;
    // console.log(props)
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
    return (
        // Inline css
        // directly 
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            {/* <img
            className="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/5047de69-8461-4e1f-b76c-5123880b4989_330433.JPG"
                alt="res-logo"
            /> */}
            {/* <h3>{resName}</h3>
            <h4>{cuisins} stars</h4> */}

            <img className="res-logo" src={CDN_URL}
            alt="FastFood"/>

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;