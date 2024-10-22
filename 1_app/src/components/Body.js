import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"


const Body = () => {
  // Local State Variable - Super powerful variable : React Hooks 
  // whenever my state variable update, react will re-rendered the component
  const [listOfRestaurants, setListOfRestaurant] = useState(resList); 


// Normal JS Variable
    let listOfRestaurantsJS = [
    {
      data: {
        id: "334475",
        name:"KFC",
        cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40800,
        deliveryTime: 36,
        avgRating: "3.8"
      },
    },
    { 
      data: {
        id: "334476",
        name:"Domino",
        cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40800,
        deliveryTime: 36,
        avgRating: "4.5"
      },
    },
    { 
      data: {
        id: "334477",
        name:"MCD",
        cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40800,
        deliveryTime: 36,
        avgRating: "4.1"
      },
    }
  ];

    return (
        <div className="body">
            <div className="filter">
               {/* Event/Click Handler */}
              <button className="filter-btn" 
              onClick={()=>{
                // filter logic here
                const fileredList = listOfRestaurants.filter(
                  (res)=>res.data.avgRating > 4
                );
                setListOfRestaurant(fileredList);
                console.log(listOfRestaurants)
              }}
              // onMouseOver={()=>{console.log("Mouse Over")}}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resName="Meghana Foods" cuisins="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisins="Fast Food, Biryani..."/>
                <RestaurantCard resName="MacDonald" cuisins="Fast Food, Indian Food..."/> */}
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/> */}
                {listOfRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};
export default Body;