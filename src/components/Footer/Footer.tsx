import React from "react";
import { PATH_FOR_LINK } from "../../constants";
import s from "./Footer.module.scss";

export default function Footer() {
  return(
    <div  className={s.Footer}>
      <div className={s.Footer__wrapper}>
        <div className={s.Footer__container}>
          <b className={s.Footer__text}>© & ™ 2019 LUCASFILM LTD.</b>
          <a href={PATH_FOR_LINK.STAR_WARS_LINK} target="_blank" rel="noreferrer" className={s.Footer__link}>www.starwars.com</a>
        </div>        
      </div>
    </div>
    
  )
}