import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *     - Image
 *     - Name, Rating, Cuisine, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="restaurant-card">
      <img
        alt="restaurant-logo"
        className="restaurant-logo"
        src={resData.logo}
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.starRating} stars</h4>
      <h4>{resData.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: 1,
    resName: "Meghana Foods",
    cuisine: "Biryani, North Indian, Asian",
    starRating: "4.3",
    deliveryTime: "38",
    logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/29/a1eeac74-144e-4012-9b86-90fa4fa188a0_2c42cf99-6dae-450e-afde-fded90c0ffda.jpg"
  },
  {
    id: 2,
    resName: "KFC",
    cuisine: "Burger, Fast Food",
    starRating: "4.0",
    deliveryTime: "30",
    logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/29/a1eeac74-144e-4012-9b86-90fa4fa188a0_2c42cf99-6dae-450e-afde-fded90c0ffda.jpg"
  },
  {
    id: 3,
    resName: "McDonald's",
    cuisine: "Burger, Fast Food",
    starRating: "4.2",
    deliveryTime: "25",
    logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/29/a1eeac74-144e-4012-9b86-90fa4fa188a0_2c42cf99-6dae-450e-afde-fded90c0ffda.jpg"
  },
  {
    id: 4,
    resName: "Dominos",
    cuisine: "Pizza, Fast Food",
    starRating: "4.1",
    deliveryTime: "35",
    logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/29/a1eeac74-144e-4012-9b86-90fa4fa188a0_2c42cf99-6dae-450e-afde-fded90c0ffda.jpg"
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
