import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

//let s = {
//   'nav':'Navbar_nav__3q1cj',
//  'item':'Navbar_item__u-3Ms',
// 'active': 'Mkjkjl_lm'
//}

//let c1 = "item";
//let c2 ="active";
//"item active"
//let classes = c1 + " " + c2;
//or
//let classesNew = `${c1} ${c2}`;

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/content" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          <Friends />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
