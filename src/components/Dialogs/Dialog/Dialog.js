import React from "react";
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = props => {
  //let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg" width="30px"/>
      <NavLink to="path">{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
