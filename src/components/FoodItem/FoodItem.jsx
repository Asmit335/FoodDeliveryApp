import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../../public/images/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItem, addToCart, removeCart } = useContext(StoreContext);
  return (
    <>
      <div className="foodItem">
        <div className="foodItemContainer">
          <img src={image} alt="loading..." className="foodItemImg" />
          {!cartItem[id] ? (
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              className="add"
            />
          ) : (
            <div className="foodItemCounter">
              <img
                onClick={() => removeCart(id)}
                src={assets.remove_icon_red}
              />
              <p>{cartItem[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
            </div>
          )}
        </div>
        <div className="foodItemInfo">
          <div className="foodItemrating">
            <p>{name}</p>
            <img src={assets.rating_starts} />
          </div>

          <p className="foodItemDesc">{description}</p>
          <p className="foodItemPrice">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
