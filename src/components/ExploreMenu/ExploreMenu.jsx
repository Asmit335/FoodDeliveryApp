import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../../public/images/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="exploreMenu">
        <h1>Explore our Menu</h1>
        <p className="exploreMenuText">
          Choose from a diverse menu items,featuring the delectable array
        </p>
        <div className="exploreMenuList">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="exploreMenuListItem"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt="loading"
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ExploreMenu;
