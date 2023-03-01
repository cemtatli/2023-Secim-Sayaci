import React from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "antd";

const style = {
  wrapper: `flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-16 my-4 w-full max-w-5xl mx-auto`,
  info: `flex items-center justify-center uppercase text-sm font-bold text-gray-700 hover:text-gray-900 group cursor-pointer`,
  color_info_1: `bg-red-600 w-4 h-4 rounded-full mr-2`,
  color_info_2: `bg-blue-600 w-4 h-4 rounded-full mr-2`,
  color_info_3: `bg-purple-600 w-4 h-4 rounded-full mr-2`,
  color_info_4: `bg-yellow-600 w-4 h-4 rounded-full mr-2`,
};

export default function ElectionMap() {
  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );
  return (
    <>
      <TurkeyMap cityWrapper={renderCity} customStyle={{ idleColor: "#555", hoverColor: "#999" }} />
      <div className={style.wrapper}>
        <div className={style.info}>
          <span className={style.color_info_1}></span>
          <span className={style.name}>Recep Tayyip Erdoğan</span>
        </div>
        <div className={style.info}>
          <span className={style.color_info_2}></span>
          <span className={style.name}>Muharrem Ince</span>
        </div>
        <div className={style.info}>
          <span className={style.color_info_3}></span>
          <span className={style.name}>Selahattin Demirtaş</span>
        </div>
        <div className={style.info}>
          <span className={style.color_info_4}></span>
          <span className={style.name}>Meral Akşener</span>
        </div>
      </div>
    </>
  );
}
