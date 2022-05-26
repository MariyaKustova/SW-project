import React from "react";
import { useParams } from "react-router-dom";

import { PlanetItems } from "../Planets/constants";

export default function Planet() {
  const param = useParams();

  const description = PlanetItems.find((planet) => Number(planet.id) === Number(param.id));
  
  return(
    <div>
      <h2>Планета №{param.id} - {description.name}</h2>
      <p>{description.description}</p>
    </div>    
  )
}