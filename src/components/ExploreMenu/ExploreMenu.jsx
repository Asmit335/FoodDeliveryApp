import React from "react";
import "./ExploreMenu.css";
import { menuList } from "../../../public/images/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="exploreMenu">
        <h1>Explore our Menu</h1>
        <p className="exploreMenuText">
          Choose from a diverse menu items,featuring the delectable array
        </p>
        <div className="exploreMenuList">
          {menuList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menuName ? "All" : item.menuName
                  )
                }
                className="exploreMenuListItem"
              >
                <img
                  className={category === item.menuName ? "active" : ""}
                  src={item.menuImage}
                  alt="loading"
                />
                <p>{item.menuName}</p>
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
