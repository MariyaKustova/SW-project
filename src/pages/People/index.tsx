import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { selectPeople } from "../../redux/reducers/people/selectors";
import { LOAD_USERS } from "../../redux/reducers/people/actions";
import { LOCATION_CHANGE } from "../../redux/reducers/location/actions";
import { PeopleState } from "../../redux/reducers/types";

import s from "./People.module.scss";

export default function People() {
  const people: PeopleState = useSelector(selectPeople);
  const dispatch = useDispatch();
  const location = useLocation();

  const changePage = (newPage: number) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: newPage,
        search: people.search,
      },
    });

  const search = (evt: any) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: 1,
        search: evt.target.value,
      },
    });

  useEffect(() => {
    dispatch({ type: LOCATION_CHANGE, payload: location.pathname });
  }, []);

  useLayoutEffect(() => {
    changePage(1);
  }, [])

  return people.loading ? (
    <div className={s.People__containerForContent}>
      <CircularProgress color="success" />
    </div>
  ) : people.data?.results ? (
    <div>
      <div className={s.People__container}>
        <form style={{ display: "inline-block", marginLeft: 20 }}>
          <input
            className={s.People__input}
            type="text"
            value={people.search}
            placeholder="Поиск персонажа..."
            onChange={search}
          />
        </form>
      </div>
      <table className={s.People__table} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Дата рождения</th>
            <th>Цвет глаз</th>
            <th>Пол</th>
            <th>Цвет волос</th>
            <th>Рост</th>
            <th>Подробная информация:</th>
          </tr>
        </thead>
        <tbody>
          {people?.data?.results.map((character) => {
            const id = character.url.replaceAll(/\D/g, "");

            return (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.eye_color}</td>
                <td>{character.gender}</td>
                <td>{character.hair_color}</td>
                <td>{character.height}</td>
                <td>
                  <Link to={id}>Подробнее</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        page={people.page}
        color="primary"
        count={people.data?.count}
        className={s.People__pagination}
        onChange={(e, pageIndex) => changePage(pageIndex)}
      />
    </div>
  ) : (
    <div className={s.People__notFound}>
      <div>
        <h2>К сожалению, в данный момент нет интересующей Вас информации...</h2>
        <button className={s.People__btnBack} onClick={() => changePage(1)}>Вернуться...</button>
      </div>
    </div>
  );
}
