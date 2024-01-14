
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent  from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";







const RestaurantCard = (props) => {
  const {resData} = props;
  const {name,cuisines,cloudinaryImageId,  costForTwoString,
    avgRating} = resData?.data;

  return (
    <div className="rest-card">
      <img
        className="rest-card-logo"
        src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId}
      />
      <h2> {name}</h2>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {costForTwoString}</h4>
      <h4> {avgRating} </h4>

    </div>
  );
};



const AppLayout = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


