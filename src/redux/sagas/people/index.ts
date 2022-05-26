import {
  call,
  takeEvery,
  put,
  apply,
  take,
  select,
  fork,
} from "redux-saga/effects";
import { matchPath } from "react-router";

import { selectPeople } from "../../reducers/people/selectors";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_FAILURE,
  LOAD_USER_DETAILS_SUCCESS,
} from "../../reducers/peopleDetails/actions";
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from "../../reducers/people/actions";
import { LOCATION_CHANGE } from "../../reducers/location/actions";
import { PATH_FOR_LINK } from "../../../constants";
import { PeopleAction } from "../../reducers/types";
import { PeopleDetailsAction } from "../../reducers/types";

export function* loadPeopleDetails({ payload }: PeopleDetailsAction): any {
  const { id } = payload;

  try {
    const request = yield call(
      fetch,
      `https://swapi.py4e.com/api//people/${id}`
    );
    const data = yield apply(request, request.json, []);

    yield put({
      type: LOAD_USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_DETAILS_FAILURE,
      payload: error,
    });
  }
}

export function* loadPeopleList({ payload }: PeopleAction): any {
  const { page, search } = payload;
  try {
    const request = yield call(
      fetch,
      `https://swapi.py4e.com/api/people?page=${page}&search=${search}`
    );
    const data = yield apply(request, request.json, []);

    if (data) {
      yield put({
        type: LOAD_USERS_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: LOAD_USERS_FAILURE,
        payload: data.detail,
      });
    }
  
    
  } catch (error) {
    console.error(`Ошибка: ${error}`);
  }  
}

export function* routeChangeSaga(): any {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (
      matchPath(
        `/${PATH_FOR_LINK.UNIVERSE_ROUTE}/${PATH_FOR_LINK.PEOPLE_ROUTE}`,
        action.payload
      )
    ) {
      const state = yield select(selectPeople);
      const { page, search } = state;

      yield put({
        type: LOAD_USERS,
        payload: {
          page,
          search,
        },
      });
    }

    const detailsPage = matchPath(
      `/${PATH_FOR_LINK.UNIVERSE_ROUTE}/${PATH_FOR_LINK.PEOPLE_ROUTE}/${PATH_FOR_LINK.PLANETS_DETAILS_ROUTE}`,
      action.payload
    );

    if (detailsPage) {
      const { id } = detailsPage.params;

      if (id) {
        yield put({
          type: LOAD_USER_DETAILS,
          payload: {
            id,
          },
        });
      }
    }
  }
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(LOAD_USERS, loadPeopleList);
  yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}
