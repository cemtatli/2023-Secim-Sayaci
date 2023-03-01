import React, { Fragment } from "react";

const style = {
  container: `flex lg:flex-row flex-wrap items-center justify-center w-full gap-4 my-10 select-none px-4`,
  body: `flex flex-col items-center justify-center  w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 text-2xl font-bold rounded-lg text-white bg-gradient-to-r from-red-300 to-red-400 dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-white `,
  value: `flex flex-col items-center justify-center text-6xl lg:text-8xl font-bold text-white rounded-lg`,
  sep: ` text-base lg:text-2xl text-white font-medium`,
};

function Countdown({ timerDays, timerHours, TimerMinutes, timerSeconds }) {
  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.body}>
          <div className={style.value}>{timerDays}</div>
          <div className={style.sep}>gün</div>
        </div>
        <div className={style.body}>
          <div className={style.value}>{timerHours}</div>
          <div className={style.sep}>saat</div>
        </div>
        <div className={style.body}>
          <div className={style.value}>{TimerMinutes}</div>
          <div className={style.sep}>dakika</div>
        </div>
        <div className={style.body}>
          <div className={style.value}>{timerSeconds}</div>
          <div className={style.sep}>saniye</div>
        </div>
      </div>
    </Fragment>
  );
}

/* Countdown.defaultProps = {
  timerDays: 20,
  timerHours: 10,
  TimerMinutes: 25,
  timerSeconds: 20,
}; */

export default Countdown;
