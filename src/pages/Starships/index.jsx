import React from "react";
import { Navigate } from "react-router";

import {PATH_FOR_LINK} from '../../constants';

export default function Starships() {
  return(
    <Navigate to={PATH_FOR_LINK.PARENT_ROUTE} />
  )
}