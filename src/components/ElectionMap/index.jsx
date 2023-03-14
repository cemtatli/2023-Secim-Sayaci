import React from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "@material-tailwind/react";

export default function ElectionMap() {
  const renderCity = (cityComponent, cityData) => (
    <Tooltip
      content={cityData.name}
      key={cityData.id}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 5 },
      }}
    >
      {cityComponent}
    </Tooltip>
  );
  return (
    <>
      <TurkeyMap cityWrapper={renderCity} customStyle={{ idleColor: "#555", hoverColor: "#999" }} />
    </>
  );
}
