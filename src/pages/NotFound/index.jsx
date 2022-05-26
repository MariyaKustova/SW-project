import React from "react";
import { Link } from "react-router-dom";
import { PATH_FOR_LINK } from "../../constants";

import s from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={s.NotFound__wrapper}>
      <div className={s.NotFound__container}>
        <h2>К сожалению, данная страница не найдена...</h2>
        <Link to={PATH_FOR_LINK.MAIN_ROUTE}>На главную...</Link>
      </div>      
    </div>
  );
}
