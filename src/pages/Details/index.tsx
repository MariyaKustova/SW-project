import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { selectPeopleDetails } from "../../redux/reducers/peopleDetails/selectors";
import { LOCATION_CHANGE } from "../../redux/reducers/location/actions";
import {PATH_FOR_LINK} from '../../constants';

import s from "./Details.module.scss";

export default function Details() {
  const dispatch = useDispatch();
  const location = useLocation();
  const details = useSelector(selectPeopleDetails);

  useEffect(() => {
    dispatch({ type: LOCATION_CHANGE, payload: location.pathname });
  }, []);

  if (details.loading) {
    return (
      <div className={s.Details__containerForContent}>
        <CircularProgress color="success" />
      </div>
    );
  }

  if (details.data) {
    const { name, birth_year, hair_color, height } = details.data;

    return (
      <div className={s.Details__wrapper}>
        <Card
          sx={{
            minWidth: 275,
            width: 500,
            margin: "0 auto",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {name || 'Нет данных'}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Дата рождения: {birth_year || 'Нет данных'}
            </Typography>
            <Typography variant="body2">Цвет волос: {hair_color}</Typography>
            <Typography variant="body2">Рост: {height}</Typography>
          </CardContent>
          <CardActions>
            <Link className={s.Details__link} to={PATH_FOR_LINK.PARENT_ROUTE}>
              Вернуться...
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }

  return (
    <div className={s.Details__wrapper}>
      <p>К сожалению, подробной информации по этому персонажу не найдено...</p>
      <Link to={PATH_FOR_LINK.PARENT_ROUTE}>
        Вернуться...
      </Link>
    </div>
  );
}
