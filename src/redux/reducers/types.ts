export interface PeopleState {
  page: number;
  search: string;
  loading: boolean;
  error: Error | null;
  data: {
    results: Person[],
    count: number,
    next: string | null,
    previous: string | null,
  } | null;
}

export interface LocationState {
  location: string,
}

export interface PeoplePayload {
  page: number;
  search: string;
}

export interface PeopleDetailsPayload {
  id: string;
}

export interface LocationPayload {
  location: string;
}

export interface PeopleAction {
  type: string;
  payload: PeoplePayload;
}

export interface PeopleDetailsAction {
  type: string;
  payload: PeopleDetailsPayload;
}

export interface LocationAction {
  type: string;
  payload: LocationPayload;
}

export interface Person {
  birth_year: string,
  eye_color:string,
  films:string[],
  height: string;
  homeworld: string,
  mass: string;
  name: string,
  skin_color: string;
  created: string,
  edited: string;
  species: string[],
  starships: string[];
  url: string,
  vehicles: string[];
  search: string,
  page: string,
  gender: string,
  hair_color: string,
}

export interface PeopleDetailsState {
  data: Person |null,
  error: Error | null,
  loading: boolean,
}


export interface AppInitialState {
  people: PeopleState,
  peopleDetails: PeopleDetailsState,
}