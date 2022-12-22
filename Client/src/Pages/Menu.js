import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import {Home} from './Home'

function Menu() {
  return (
    <div className="menu" style={{backgroundColor:"white"}}>
      <h1 className="menuTitle">Donor Donation</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
