import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";

const style = {
  footer: `text-center text-gray-800 bg-gray-100 font-semibold text-xs h-10 flex items-center justify-between lg:justify-end px-4 py-2 w-full sticky bottom-0`,
  icon: `text-xl ml-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out`,
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
