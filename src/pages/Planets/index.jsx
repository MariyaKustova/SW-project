import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import { PlanetItems } from "./constants";

import s from "./Planets.module.scss";

export default function Planets() {
  return (
    <div className={s.Planets__wrapper}>
      <h1>Планеты</h1>
      <div className={s.Planets__container}>
        <ul className={s.Planets__nav}>
          {PlanetItems.map((planete) => (
            <li className={s.Planets__item} key={planete.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.Planets__linkActive : ""
                }
                to={planete.id}
              >
                {planete.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
