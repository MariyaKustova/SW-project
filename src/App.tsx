import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_FOR_LINK } from "./constants";
import MainPage from "./pages/MainPage";
import History from "./pages/History";
import Universe from "./pages/Universe";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Details from "./pages/Details";
import Planet from "./pages/Planet";
import Layout from "./components/Layout/Layout";
import PeopleLayout from "./pages/PeopleLayuot";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path={PATH_FOR_LINK.MAIN_ROUTE} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={PATH_FOR_LINK.HISTORY_ROUTE} element={<History />} />
        <Route path={PATH_FOR_LINK.UNIVERSE_ROUTE} element={<Universe />}>
          <Route index element={<Films />} />
          <Route path={PATH_FOR_LINK.FILMS_ROUTE} element={<Films />} />
          <Route path={PATH_FOR_LINK.PEOPLE_ROUTE} element={<PeopleLayout />}>
            <Route index element={<People />} />
            <Route path={PATH_FOR_LINK.DETAILS_ROUTE} element={<Details />} />
          </Route>
          <Route path={PATH_FOR_LINK.PLANETS_ROUTE} element={<Planets />}>
            <Route
              path={PATH_FOR_LINK.PLANETS_DETAILS_ROUTE}
              element={<Planet />}
            />
          </Route>
          <Route path={PATH_FOR_LINK.STARSHIPS_ROUTE} element={<Starships />} />
        </Route>
        <Route path={PATH_FOR_LINK.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
