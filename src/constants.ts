import {RouteItem} from "./types";

export const PATH_FOR_LINK = {
  MAIN_ROUTE: "/",
  NOT_FOUND: "*",
  PEOPLE_ROUTE: "people",
  DETAILS_ROUTE: ":id",
  HISTORY_ROUTE: "history",
  UNIVERSE_ROUTE: "universe",
  PLANETS_ROUTE: "planets",
  PLANETS_DETAILS_ROUTE: ":id",
  FILMS_ROUTE: "films/*",
  STARSHIPS_ROUTE: "starships",
  PARENT_ROUTE: "..",
  STAR_WARS_LINK: "https://www.starwars.com/news/",
  STAR_WARS_HISTORY: "https://disgustingmen.com/kino/how-star-wars-was-made-history",
  STAR_WARS_FAN: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B",
}

export enum ROUTE_ID {
  MAIN_ROUTE = "MAIN_ROUTE",
  DETAILS_ROUTE = "DETAILS_ROUTE",
  PEOPLE_ROUTE = "PEOPLE_ROUTE",
  HISTORY_ROUTE = "HISTORY_ROUTE",
  UNIVERSE_ROUTE = "UNIVERSE_ROUTE",
  PLANETS_ROUTE = "PLANETS_ROUTE",
  PLANETS_DETAILS_ROUTE = 'PLANETS_DETAILS_ROUTE',
  FILMS_ROUTE = "FILMS_ROUTE",
  STARSHIPS_ROUTE = "STARSHIPS_ROUTE",
  NOT_FOUND = "NOT_FOUND",
}

export const links: RouteItem[] = [
  {
    id: ROUTE_ID.FILMS_ROUTE,
    path: PATH_FOR_LINK.FILMS_ROUTE,
    title: "Фильмы",
  },
  {
    id: ROUTE_ID.PEOPLE_ROUTE,
    path: PATH_FOR_LINK.PEOPLE_ROUTE,
    title: "Персонажи",
  },  
  {
    id: ROUTE_ID.PLANETS_ROUTE,
    path: PATH_FOR_LINK.PLANETS_ROUTE,
    title: "Планеты",
  },
  {
    id: ROUTE_ID.STARSHIPS_ROUTE,
    path: PATH_FOR_LINK.STARSHIPS_ROUTE,
    title: "Транспорт",
  },
  {
    id: ROUTE_ID.DETAILS_ROUTE,
    path: PATH_FOR_LINK.DETAILS_ROUTE,
  },
];
