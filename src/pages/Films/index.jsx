import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { FilmItems } from "./constants";

import s from "./Films.module.scss";

export default function Films() {
  return (
    <div className={s.Films__wrapper}>
      <h1>Фильмы</h1>
      <div className={s.Films__container}>
        <ul className={s.Films__nav}>
          {FilmItems.map((film) => (
            <li className={s.Films__item} key={film.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.Films__linkActive : ""
                }
                to={film.id}
              >
                {film.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Routes>
          {FilmItems.map((film) => (
            <Route
              key={film.id}
              path={film.id}
              element={
                <div>
                  <h2>{film.name}</h2>
                  <p>{film.description}</p>
                </div>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
