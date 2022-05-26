import React from "react";
import { Link, NavLink } from "react-router-dom";

import { PATH_FOR_LINK } from "../../constants";

import s from "./Header.module.scss";

export default function Header() {
  return(
    <div  className={s.Header}>
      <div className={s.Header__wrapper}>
        <div className={s.Header__container}>
          <Link to={PATH_FOR_LINK.MAIN_ROUTE} className={s.Header__linkImg} />
          <div className={s.Header__nav}>
            <NavLink to={PATH_FOR_LINK.HISTORY_ROUTE} className={({isActive}) => isActive ? s.Header__linkActive : s.Header__link}>ИСТОРИЯ</NavLink>
            <NavLink to={PATH_FOR_LINK.UNIVERSE_ROUTE} className={({isActive}) => isActive ? s.Header__linkActive : s.Header__link}>ВСЕЛЕННАЯ</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}