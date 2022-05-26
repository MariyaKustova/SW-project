import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_FOR_LINK } from "../../constants";
import {itemData} from "./constants";

import s from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={s.MainPage__wrapper}>
      <h2>Больше, чем фильм...</h2>
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={350}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              src={`${item.src}?w=161&fit=crop&auto=format`}
              alt="Фотография"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <p>
        «Звёздные войны» (англ. Star Wars) — североамериканская фантастическая
        медиафраншиза, созданная Джорджем Лукасом. В ней описываются приключения
        множества персонажей, происходящие «давным-давно, в далёкой-далёкой
        галактике». С 1976 года по настоящее время в рамках вселенной «Звёздных
        войн» были выпущены сотни книг и комиксов для аудитории всех возрастов,
        несколько анимационных сериалов, множество компьютерных и настольных
        игр, 9 полнометражных фильмов-эпизодов и несколько фильмов спин-оффов.
      </p>
      <Link to={PATH_FOR_LINK.STAR_WARS_FAN} target="_blank" rel="noreferrer">
        Узнать больше...
      </Link>
    </div>
  );
}
