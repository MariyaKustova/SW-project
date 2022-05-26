import React from "react";
import { PATH_FOR_LINK } from "../../constants";

import s from "./History.module.scss";

export default function History() {
  return(
    <div className={s.History__wrapper}>
      <h2>Как Джордж Лукас придумал «Звездные войны»</h2>
      <a href={PATH_FOR_LINK.STAR_WARS_HISTORY} className={s.History__linkImg} target="_blank" rel="noreferrer">Фотография актеров</a>
      <p>25 мая 1977 года состоялась премьера первого фильма в цикле «Звездных войн» — четвертый эпизод «Новая надежда». В честь юбилея одной из самых влиятельных картин в истории кинематографа Отвратительные мужики рассказывают историю создания оригинального фильма, который молодой кинематографист Джордж Лукас придумал и снял в середине 70-х годов прошлого века.</p>
      <a href={PATH_FOR_LINK.STAR_WARS_HISTORY} target="_blank" rel="noreferrer">Узнать больше...</a>
    </div>
  )
}