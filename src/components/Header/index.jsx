import React, { Fragment } from "react";
import { Switch } from "@material-tailwind/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Dialog from "../Dialog";

const style = {
  header: `sticky top-0 z-10 flex h-16 items-center justify-between px-4 py-2 text-white gap-6 bg-gradient-to-r from-red-300 to-red-400 dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-white lg:text-lg;`,
  title: `text-xl font-bold tracking-wide`,
  button: `focus:outline-none flex items-center justify-center`,
};

export default function Header() {
  return (
    <header className={style.header}>
      <span className={style.title}>2023 Seçim Sayacı</span>

      <button
        className={style.button}
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("dark", true);
          } else {
            localStorage.removeItem("dark");
          }
        }}
      >
        <SunIcon className="hidden h-6 w-6 dark:block" />
        <MoonIcon className="block h-6 w-6 dark:hidden" />
      </button>
    </header>
  );
}
