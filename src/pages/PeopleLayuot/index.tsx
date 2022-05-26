import React from "react";
import { Outlet } from "react-router";

import s from "./PeopleLayout.module.scss";

export default function PeopleLayout() {
  return (
    <div className={s.PeopleLayout__wrapper}>
        <h1>Персонажи звездной саги...</h1>
        <Outlet />
    </div>
  );
}
