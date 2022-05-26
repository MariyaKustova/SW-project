import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_ID, links } from "../../constants";
import s from "./Universe.module.scss";

export default function Universe() {
  return (
    <div className={s.Universe__wrapper}>
      <div className={s.Universe__nav}>
        {links.map(({ path, title, id }, index) =>
          id === ROUTE_ID.DETAILS_ROUTE ? undefined : (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? s.Universe__linkActive : s.Universe__link
              }
            >
              {title}
            </NavLink>
          )
        )}
      </div>
      <Outlet />
    </div>
  );
}
