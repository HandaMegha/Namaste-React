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

export default RestaurantCard;
