import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";

const style = {
  footer: `text-center text-white mt-5 bg-gradient-to-r h-10 flex items-center from-red-300 to-red-400 dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 font-semibold text-xs justify-between lg:justify-end px-4 py-2 w-full sticky bottom-0`,
  icon: `text-xl ml-2 text-white`,
  link: `flex items-center mx-4`,
};

export default function Footer() {
  return (
    <footer className={style.footer}>
      <span>© 2023 Seçim Sayacı</span>
      <div className={style.link}>
        <a href="https://twitter.com/vaycem" target={"_blank"}>
          <BsTwitter className={style.icon} />
        </a>
        <a href="https://github.com/cemtatli" target={"_blank"}>
          <BsGithub className={style.icon} />
        </a>
      </div>
    </footer>
  );
}
